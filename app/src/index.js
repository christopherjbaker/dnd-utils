import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

import { makeInactive, makeActive } from './inactive';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const basename = process.env.NODE_ENV === 'production' ? '/dnd-utils' : '';

makeInactive();
const container = document.getElementById('root');
ReactDOM.render((
	<BrowserRouter basename={basename}>
		<App />
	</BrowserRouter>
), container, makeActive);
