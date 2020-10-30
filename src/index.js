//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Redux
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
//Styles
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);
