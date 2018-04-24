import styled, { injectGlobal } from 'styled-components';

export const Form = styled.form`
	margin: 0 0 1.5em 0;
`;

export const Field = styled.div`
	margin: 0 0 1.5em 0;

	> :last-child {
		margin-bottom: 0;
	}
`;


export const SelectWrapper = styled.div`
	text-decoration: none;
	display: block;
	position: relative;

	:before {
		content: "";
		font-smoothing: antialiased;
		font-family: FontAwesome;
		font-style: normal;
		font-weight: normal;
		text-transform: none !important;
	}

	:before {
		color: #c8cccf;
		display: block;
		height: 2.75em;
		line-height: 2.75em;
		pointer-events: none;
		position: absolute;
		right: 0;
		text-align: center;
		top: 0;
		width: 2.75em;
	}
`;

export const Select = styled.select`
	appearance: none;
	border-radius: 4px;
	border: solid 1px #c8cccf;
	color: inherit;
	display: block;
	outline: 0;
	padding: 0 1em;
	text-decoration: none;
	width: 100%;
	height: 2.75em;

	:invalid {
		box-shadow: none;
	}

	:focus {
		border-color: #ff7496;
	}
`;

export const SelectOption = styled.option`
`;


export const Textarea = styled.textarea`
	appearance: none;
	border-radius: 4px;
	border: solid 1px #c8cccf;
	color: inherit;
	display: block;
	outline: 0;
	padding: 0.75em 1em;
	text-decoration: none;
	width: 100%;

	:invalid {
		box-shadow: none;
	}

	:focus {
		border-color: #ff7496;
	}
`;

const BaseStringInput = styled.input`
	appearance: none;
	border-radius: 4px;
	border: solid 1px #c8cccf;
	color: inherit;
	display: block;
	outline: 0;
	padding: 0 1em;
	text-decoration: none;
	width: 100%;
	height: 2.75em;

	:invalid {
		box-shadow: none;
	}

	:focus {
		border-color: #ff7496;
	}
`;

export const Text = BaseStringInput.extend.attrs({ type: 'text' })``;
export const Password = BaseStringInput.extend.attrs({ type: 'password' })``;
export const Email = BaseStringInput.extend.attrs({ type: 'email' })``;
export const Telephone = BaseStringInput.extend.attrs({ type: 'tel' })``;

injectGlobal`
	::-webkit-input-placeholder {
		color: #616f77 !important;
		opacity: 1.0;
	}

	:-moz-placeholder {
		color: #616f77 !important;
		opacity: 1.0;
	}

	::-moz-placeholder {
		color: #616f77 !important;
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		color: #616f77 !important;
		opacity: 1.0;
	}
`;


export const Label = styled.label`
	color: #313f47;
	display: block;
	font-size: 0.9em;
	margin: 0 0 0.75em 0;
`;

const BaseClickInput = styled.input`
	appearance: none;
	display: block;
	float: left;
	margin-right: -2em;
	opacity: 0;
	width: 1em;
	z-index: -1;

	&  + label {
		text-decoration: none;
		color: #414f57;
		cursor: pointer;
		display: inline-block;
		font-size: 1em;
		font-weight: 300;
		padding-left: 2.4em;
		padding-right: 0.75em;
		position: relative;

		:before {
			font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
		}

		:before {
			border-radius: 4px;
			border: solid 1px #c8cccf;
			content: '';
			display: inline-block;
			height: 1.65em;
			left: 0;
			line-height: 1.58125em;
			position: absolute;
			text-align: center;
			top: 0.15em;
			width: 1.65em;
		}
	}

	&:checked + label:before {
		color: #ff7496;
		content: '\f00c';
	}

	&:focus + label:before {
		border-color: #ff7496;
	}
`;

export const Checkbox = BaseClickInput.extend.attrs({ type: 'checkbox' })`
	& + label:before {
	   border-radius: 4px;
	}
`;

export const Radio = BaseClickInput.extend.attrs({ type: 'radio' })`
	& + label:before {
		border-radius: 100%;
	}
`;
