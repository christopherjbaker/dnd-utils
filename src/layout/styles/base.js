import { css } from 'styled-components';

export default function type() {
	return css`
		*, *:before, *:after {
			box-sizing: border-box;
		}

		hr {
			border: 0;
			border-bottom: solid 1px ${props => props.theme.midground};
			margin: 2em 0;
		}

		table {
			border-collapse: collapse;
			border-spacing: 0;
		}
	`;
}
