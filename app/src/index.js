import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './app';

document.body.classList.add('is-loading');

const container = document.getElementById('root');
ReactDOM.render(<App />, container, () => {
	setTimeout(() => {
		document.body.classList.remove('is-loading');
	}, 0);
});
