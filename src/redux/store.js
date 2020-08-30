//Core
import { configureStore } from '@reduxjs/toolkit';
//Redux
import { authReducers } from './auth';
import { contactsReducers } from './contacts';

export const store = configureStore({
	reducer: {
		auth: authReducers,
		contacts: contactsReducers,
	},
});
