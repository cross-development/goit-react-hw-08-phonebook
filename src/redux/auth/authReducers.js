//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './authActions';

//User initial State
const initialUserState = { name: null, email: null };

//User reducer handler
const getCurrentUser = (state, { payload }) => payload;
const registerUser = (state, { payload }) => payload.user;
const loginUser = (state, { payload }) => payload.user;
const logoutUser = () => initialUserState;

//User reducer
const user = createReducer(initialUserState, {
	[authActions.getCurrentUserSuccess]: getCurrentUser,
	[authActions.registerSuccess]: registerUser,
	[authActions.loginSuccess]: loginUser,
	[authActions.logoutSuccess]: logoutUser,
});

//Token initial state
const initialTokenState = null;

//Token reducer handler
const registerToken = (state, { payload }) => payload.token;
const loginToken = (state, { payload }) => payload.token;
const logoutToken = () => initialTokenState;

//Token reducer
const token = createReducer(initialTokenState, {
	[authActions.registerSuccess]: registerToken,
	[authActions.loginSuccess]: loginToken,
	[authActions.logoutSuccess]: logoutToken,
});

//Error initial state
const initialErrorState = null;

//Error reducer handler
const getUserError = (state, { payload }) => payload;
const registerError = (state, { payload }) => payload;
const loginError = (state, { payload }) => payload;
const logoutError = (state, { payload }) => payload;

//Error reducer
const error = createReducer(initialErrorState, {
	[authActions.getCurrentUserFailure]: getUserError,
	[authActions.registerFailure]: registerError,
	[authActions.loginFailure]: loginError,
	[authActions.logoutFailure]: logoutError,
});

export default combineReducers({
	user,
	token,
	error,
});
