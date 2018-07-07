/* eslint-disable no-console */
const Deck = require('./deck');
const wrapText = require('../lib/wrap-text');

const count = +process.argv[2];
if (isNaN(count)) {
	console.log('you must specify a count.');
}

let deck = new Deck();
for (let i = 0; i < count; i++) {
	const { name, text } = deck.draw();

	console.log(`## ${name}`);
	console.log(wrapText(text));
	console.log('');
}
