/* eslint-disable no-proto */
import styled from 'styled-components';

let inactive = true;

const Thing = styled.div``;
const buildExecutionContext = Thing.prototype.__proto__.buildExecutionContext;
Thing.prototype.__proto__.buildExecutionContext = function(theme, props) {
	if (inactive) {
		return buildExecutionContext.call(this, theme, { ...props, inactive });
	}

	return buildExecutionContext.call(this, theme, props);
};

export function makeInactive() {
	document.body.classList.add('is-loading');
	inactive = true;
}

export function makeActive() {
	setTimeout(() => {
		document.body.classList.remove('is-loading');
		inactive = false;
		this.forceUpdate();
	}, 0);
}
