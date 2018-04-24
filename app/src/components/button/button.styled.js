import styled, { css } from 'styled-components';

export const BaseButton = styled.div`
	appearance: none;
	transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;
	display: inline-block;
	height: 2.75em;
	line-height: 2.75em;
	padding: 0 1.5em;
	background-color: transparent;
	border-radius: 4px;
	border: solid 1px #c8cccf;
	color: #414f57 !important;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	white-space: nowrap;

	:hover {
		border-color: #ff7496;
		color: #ff7496 !important;
	}

	:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	${props => props.icon && css`
		padding-left: 1.35em;
		:before {
			margin-right: 0.5em;
		}
	`}

	${props => props.fit && css`
		display: block;
		width: 100%;
		margin: 0 0 0.75em 0;
	`}

	${props => props.small && css`
		font-size: 0.8em;
	`}

	${props => props.big && css`
		font-size: 1.35em;
	`}

	${props => props.disabled && css`
		pointer-events: none;
		opacity: 0.5;
	`}
`;

export const Div = BaseButton.withComponent('div');

export const Input = BaseButton.withComponent('input');

export const Link = BaseButton.withComponent('a');
