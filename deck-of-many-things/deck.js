const cards = require('./cards');

class Deck {
	constructor() {
		this.reset();
	}

	reset() {
		this._deck = Object.keys(cards).map(name => ({ name, count: 0 }));
	}

	draw() {
		if (this.isEmpty) {
			this.reset();
		}

		let deck = this.deck;
		let card = deck[Math.floor(Math.random() * deck.length)];

		return {
			name: card.name,
			text: cards[card.name],
		};
	}

	get deck() {
		return this._deck.filter(({ name, count }) => {
			return count === 0 || [ 'Fool', 'Jester' ].contains(name);
		});
	}

	get isEmpty() {
		return this.deck.filter(({ count }) => count === 0).length === 0;
	}
}

module.exports = Deck;
