//Core
import { lazy } from 'react';

export default [
	{
		path: '/',
		label: 'Home',
		exact: true,
		private: false,
		restricted: false,
		component: lazy(() => import('../views/HomeView' /* webpackChunkName: "home-view" */)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('../views/RegisterView' /* webpackChunkName: "register-view" */)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('../views/LoginView' /* webpackChunkName: "login-view" */)),
	},
	{
		path: '/contacts',
		label: 'Contacts',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('../views/ContactsView' /* webpackChunkName: "contacts-view" */)),
	},
];
