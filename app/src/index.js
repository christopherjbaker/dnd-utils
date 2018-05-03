import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

import makeActive from './inactive';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const bgs = [ 'bg-dmg', 'bg-lmop', 'bg-mm', 'bg-phb' ];
document.body.classList.add(bgs[Math.floor(Math.random() * bgs.length)]);

const basename = process.env.NODE_ENV === 'production' ? '/dnd-utils' : '';
const container = document.getElementById('root');
ReactDOM.render((
	<BrowserRouter basename={basename}>
		<App />
	</BrowserRouter>
), container, makeActive);
