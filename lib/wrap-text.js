function wrapText(text, columns = process.stdout.columns) {
	const output = [];
	while(text.length > 0) {
		if (text.length < columns) {
			output.push(text);
			break;
		}

		for (let i = columns; i > 0; i--) {
			if (text[i] === ' ') {
				output.push(text.slice(0, i));
				text = text.slice(i + 1);
				break;
			}
		}
	}

	return output.join('\n');
}

module.exports = wrapText;
