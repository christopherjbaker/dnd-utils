import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	max-width: 100%;
	min-width: 27em;
	padding: 4.5em 3em 3em 3em ;
	background: #ffffff;
	border-radius: 4px;
	border: solid 1px #c8cccf;
	cursor: default;
	opacity: 0.95;
	text-align: center;
	transform-origin: 50% 50%;
	transform: rotateX(0deg);
	transition: opacity 1s ease, transform 1s ease;

	${props => props.theme.medium`
		min-width: 0;
		width: 100%;
		padding: 4em 2em 2.5em 2em ;
	`}
`;

export const Header = styled.header`
`;

export const Avatar = styled.div`
	position: relative;
	margin-bottom: 1.5em;

	:before {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: -3em;
		width: calc(100% + 6em);
		height: 1px;
		z-index: -1;
		background: #c8cccf;

		${props => props.theme.medium`
			left: -2em;
			width: calc(100% + 4em);
		`}
	}
`;

export const Image = styled.img`
	display: block;
	margin: 0 auto;
	border-radius: 100%;
	box-shadow: 0 0 0 1.5em #ffffff;
`;

export const Title = styled.h1`
`;

export const Subtitle = styled.p`
`;
