/* eslint-disable no-console */
const Deck = require('./deck');

const count = +process.argv[2];
if (isNaN(count)) {
	console.log('you must specify a count.');
}

let deck = new Deck();
for (let i = 0; i < count; i++) {
	console.log(deck.draw());
}
