import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const List = styled.ul`
	margin: 0 0 1.5em 0;
	padding-left: 1em;

	li {
		padding-left: 0.5em;
	}

	${props => props.alt && css`
		list-style: none;
		padding-left: 0;

		li {
			border-top: solid 1px ${props => props.theme.midground};
			padding: 0.5em 0;

			:first-child {
				border-top: 0;
				padding-top: 0;
			}
		}
	`}

	${props => props.icons && css`
		cursor: default;
		list-style: none;
		padding-left: 0;
		margin-top: -0.675em;

		li {
			display: inline-block;
			padding: 0.675em 0.5em;
		}

		li a {
			text-decoration: none;
			position: relative;
			display: block;
			width: 3.75em;
			height: 3.75em;
			border-radius: 100%;
			border: solid 1px ${props => props.theme.midground};
			line-height: 3.75em;
			overflow: hidden;
			text-align: center;
			text-indent: 3.75em;
			white-space: nowrap;

			:before {
				font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;

				color: ${props => props.theme.background};
				text-shadow: 1.25px 0px 0px ${props => props.theme.midground}, -1.25px 0px 0px ${props => props.theme.midground}, 0px 1.25px 0px ${props => props.theme.midground}, 0px -1.25px 0px ${props => props.theme.midground};
			}

			:hover:before {
				text-shadow: 1.25px 0px 0px ${props => props.theme.accent}, -1.25px 0px 0px ${props => props.theme.accent}, 0px 1.25px 0px ${props => props.theme.accent}, 0px -1.25px 0px ${props => props.theme.accent};
			}

			:before {
				position: absolute;
				top: 0;
				left: 0;
				width: inherit;
				height: inherit;
				font-size: 1.85rem;
				line-height: inherit;
				text-align: center;
				text-indent: 0;
			}

			:hover {
				border-color: ${props => props.theme.accent};
			}
		}

	`}

	${props => props.actions && css`
		cursor: default;
		list-style: none;
		padding-left: 0;

		li {
			display: inline-block;
			padding: 0 0.75em 0 0;
			vertical-align: middle;

			:last-child {
				padding-right: 0;
			}
		}
	`}
`;

List.propTypes = {
	alt: PropTypes.bool,
	icons: PropTypes.bool,
	actions: PropTypes.bool,
};

export const ListItem = styled.li`
`;
