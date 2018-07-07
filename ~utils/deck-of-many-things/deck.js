const cards = require('./cards');
const keep = [ 'fool', 'jester' ];

class Deck {
	constructor() {
		this.reset();
	}

	reset() {
		this._deck = Object.keys(cards);
	}

	draw() {
		if (this.isEmpty) {
			this.reset();
		}

		let index = Math.floor(Math.random() * this._deck.length);
		let card = this._deck[index];

		if (!keep.includes(card)) {
			this._deck.splice(index, 1);
		}

		return cards[card];
	}

	get isEmpty() {
		return this._deck.filter(card => !keep.includes(card)).length === 0;
	}
}

module.exports = Deck;
