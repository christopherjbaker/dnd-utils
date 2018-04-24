import styled from 'styled-components';
import base from './styles/base.js';
import type from './styles/type.js';

import { List as BaseList, ListItem as BaseListItem } from '~/components/list/list.styled';

export const Container = styled.div`
	${base}
	${type}
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	perspective: 1000px;
	position: relative;
	min-height: 100%;
	padding: 1.5em;
	z-index: 2;

	> * {
		z-index: 1;
	}

	:before {
		content: '';
		display: block;
	}

	${props => props.theme.small`
		padding: 0.75em;
	`}
`;

export const Footer = styled.div`
	align-self: flex-end;
	width: 100%;
	padding: 1.5em 0 0 0;
	color: rgba(255, 255, 255, 0.75);
	cursor: default;
	text-align: center;
`;

export const FooterList = BaseList.extend`
	margin: 0;
	padding: 0;
	font-size: 0.9em;
	list-style: none;
`;

export const FooterListItem = BaseListItem.extend`
	display: inline-block;
	margin: 0 0 0 0.45em;
	padding: 0 0 0 0.85em;
	border-left: solid 1px rgba(255, 255, 255, 0.5);
	line-height: 1;

	:first-child {
		border-left: 0;
	}
`;

export const Link = styled.a`
`;
