import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import { store, synthHistory } from './redux';
import App from './App';

import './index.scss';

const title = document.getElementById('app-title');
title.innerHTML = process.env.APP_TITLE || 'Reports';

ReactDOM.render(
	<Provider store={store}>
		<Router basename="/" history={synthHistory}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
