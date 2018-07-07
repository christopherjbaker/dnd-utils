const a = 1664525;
const c = 1013904223;
const m = Math.pow(2, 32);

export default class Random {
	constructor(seed) {
		this._x = seed;
	}

	_random() {
		return this._x = (a * this._x + c) % m;
	}

	float() {
		return this._random() / m;
	}

	shuffle(list) {
		list = [ ...list ];

		for (let i = list.length - 1; i >= 0; i--) {
			const j = Math.floor(this.float() * list.length);

			const temp = list[i];
			list[i] = list[j];
			list[j] = temp;
		}

		return list;
	}
}
