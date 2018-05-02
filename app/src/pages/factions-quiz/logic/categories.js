import data from './data';
const categories = getCategories(data);

export function parseCategories(array) {
	const object = {};

	for (const index in categories) {
		object[categories[index]] = (array[index] - 32) / 4;
	}

	return object;
}

export function serializeCategories(object) {
	const array = [];

	for (const index in categories) {
		array[index] = Math.round((object[categories[index]] || 0) * 4 + 32);
	}

	return array;
}

export function chooseCategory(object, category, value) {
	return {
		...object,
		[category]: object[category] + value,
	};
}

function getCategories(data) {
	const categories = {};

	for (const { statements } of data.sections) {
		for (const { category } of statements) {
			categories[category] = true;
		}
	}

	return Object.keys(categories).sort();
}
