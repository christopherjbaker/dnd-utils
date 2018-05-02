import Random from '~/utils/random';
import data from './data';
import { parseCategories, serializeCategories, chooseCategory } from './categories';
import { encode, decode, decodeRandom } from './code';

const levels = [
	{ value:  1.0, label: 'Very Accurate' },
	{ value:  0.5, label: 'Moderately Accurate' },
	// { value:  0.0, label: 'Neither Accurate Nor Inaccurate' },
	{ value: -0.5, label: 'Moderately Inaccurate' },
	{ value: -1.0, label: 'Very Inaccurate' },
];

function parseSecret(secret) {
	if (secret.length === 8) {
		const [ seed, sectionIndex, statementIndex, ...categories ] = decode(secret);

		return {
			seed,
			sectionIndex: sectionIndex - 1,
			statementIndex: statementIndex - 1,
			categories: parseCategories(categories),
		};
	}

	if (secret.length === 5) {
		const [ ...categories ] = decode(secret);

		return {
			categories: parseCategories(categories),
		};
	}

	throw new Error(`Invalid secret: ${secret}`);
}

function serializeSecret({
	seed,
	sectionIndex = 0,
	statementIndex = -1,
	categories = {},
}) {
	categories = serializeCategories(categories);

	return encode([ seed, sectionIndex + 1, statementIndex + 1, ...categories ]);
}

function serializeResults({ categories }) {
	categories = serializeCategories(categories);

	return encode(categories);
}

export default function getDetails(secret) {
	if (!secret) {
		return {
			section: 'Welcome!',
			statement: 'Click below to begin the questions!',
			responses: [{
				label: 'Begin',
				secret: serializeSecret({ seed: decodeRandom() }),
			}],
		};
	}

	const { seed, sectionIndex, statementIndex, categories } = parseSecret(secret);

	if (typeof seed === 'undefined') {
		const max = Math.max(...Object.keys(categories).map(category => categories[category]));
		return {
			section: 'Player Results',
			responses: Object.keys(categories).map((category) => ({
				label: category,
				secret: secret,
				value: categories[category] / max,
			})),
		};
	}

	if (sectionIndex === -1) {
		const secret = serializeResults({ categories });

		return {
			section: 'Finished!',
			statement: `Provide this to your GM: ${secret}`,
			responses: [{
				label: 'View Results',
				secret: secret,
			}],
		};
	}

	const { label: section, description, statements } = data.sections[sectionIndex];

	if (statementIndex === -1) {
		return {
			section,
			statement: description,
			responses: [{
				label: 'Continue',
				secret: serializeSecret({
					seed,
					sectionIndex,
					statementIndex: 0,
					categories,
				}),
			}],
		};
	}

	const random = new Random(seed);
	const list = random.shuffle(statements);
	const { category, label: statement } = list[statementIndex];

	const next = { sectionIndex, statementIndex: statementIndex + 1 };
	if (next.statementIndex >= statements.length) {
		next.statementIndex = -1;
		next.sectionIndex += 1;

		if (next.sectionIndex >= data.sections.length) {
			next.sectionIndex = -1;
		}
	}

	return {
		section,
		statement,
		responses: levels.map(({ value, label }) => ({
			label,
			secret: serializeSecret({
				...next,
				seed,
				categories: chooseCategory(categories, category, value),
			}),
		})),
	};
}
