import { css } from 'styled-components';

const sizes = {
	large: 1680,
	medium: 480,
	small: 360,
};

const media = Object.keys(sizes).reduce((media, label) => {
	media[label] = (...args) =>
		css`@media (max-width: ${sizes[label]}px) {
			${css(...args)}
		}`;

	return media;
}, {});

export default {
	...media,

	accent: '#ff7496',
	foreground: '#313f47',
	midground: '#c8cccf',
	background: '#ffffff',
};
