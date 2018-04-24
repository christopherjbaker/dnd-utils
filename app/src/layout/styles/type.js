import { css } from 'styled-components';

export default function type() {
	return css`
		a {
			transition: color 0.2s ease, border-color 0.2s ease;
			color: inherit;
			text-decoration: none;
		}

		a:before {
			transition: color 0.2s ease, text-shadow 0.2s ease;
		}

		a:hover {
			color: #ff7496;
		}

		strong, b {
			color: #313f47;
		}

		em, i {
			font-style: italic;
		}

		p {
			margin: 0 0 1.5em 0;
		}

		h1, h2, h3, h4, h5, h6 {
			color: #313f47;
			line-height: 1.5;
			margin: 0 0 0.75em 0;
		}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}

		h1 {
			font-size: 1.85em;
			letter-spacing: 0.22em;
			margin: 0 0 0.525em 0;
		}

		h2 {
			font-size: 1.25em;
		}

		h3 {
			font-size: 1em;
		}

		h4 {
			font-size: 1em;
		}

		h5 {
			font-size: 1em;
		}

		h6 {
			font-size: 1em;
		}

		@media screen and (max-width: 480px) {

			h1 {
				font-size: 1.65em;
			}

		}

		sub {
			font-size: 0.8em;
			position: relative;
			top: 0.5em;
		}

		sup {
			font-size: 0.8em;
			position: relative;
			top: -0.5em;
		}
	`;
}
