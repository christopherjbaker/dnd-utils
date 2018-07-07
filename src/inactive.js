/* eslint-disable no-proto */
import styled from 'styled-components';

document.body.classList.add('is-loading');
let inactive = true;

export default function makeActive() {
	setTimeout(() => {
		document.body.classList.remove('is-loading');
		inactive = false;
		this.forceUpdate();
	}, 0);
}

const Thing = styled.div``;
const buildExecutionContext = Thing.prototype.__proto__.buildExecutionContext;
Thing.prototype.__proto__.buildExecutionContext = function(theme, props) {
	if (inactive) {
		return buildExecutionContext.call(this, theme, { ...props, inactive });
	}

	return buildExecutionContext.call(this, theme, props);
};
