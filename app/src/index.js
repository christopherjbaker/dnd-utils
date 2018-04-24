import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

import App from './app';
import { BrowserRouter } from 'react-router-dom';

document.body.classList.add('is-loading');

const container = document.getElementById('root');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, container, () => {
	setTimeout(() => {
		document.body.classList.remove('is-loading');
	}, 0);
});
