import styled, { css } from 'styled-components';

import { Link } from '~/components/button/button.styled';

export const Section = styled.h2`
`;

export const Statement = styled.p`
	font-weight: bold;
`;

export const Response = Link.extend`
	position: relative;
	display: block;
	margin-top: 1em;

	${props => typeof props.value !== undefined && css`
		:before {
			content: "";
			z-index: -1;
			position: absolute;
			left: 0;
			top: 0; bottom: 0;

			width: ${props.value * 100}%;
			background: ${props => props.theme.accent};
			opacity: 0.15;
		}
	`}
`;
