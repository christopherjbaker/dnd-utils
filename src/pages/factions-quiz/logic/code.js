const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys0123456789-_';

export function encode(value) {
	if (Array.isArray(value)) {
		return value.map(encode).join('');
	}

	return chars[value];
}

export function decode(value) {
	if (value.length > 1) {
		return value.split('').map(decode);
	}

	return chars.indexOf(value);
}

export function decodeRandom() {
	return Math.floor(Math.random() * chars.length);
}
