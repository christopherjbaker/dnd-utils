import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

import App from './app';
import { BrowserRouter } from 'react-router-dom';

import { makeInactive, makeActive } from './inactive';

makeInactive();
const container = document.getElementById('root');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, container, makeActive);
