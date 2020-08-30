//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Components
import App from './components/App';
//Redux
import { store } from './redux/store';
//Styles
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
