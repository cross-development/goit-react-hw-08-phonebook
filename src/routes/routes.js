//Core
import { lazy } from 'react';

export default [
	{
		path: '/',
		label: 'Home',
		exact: true,
		component: lazy(() => import('./views/HomeView' /* webpackChunkName: "home-view" */)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		component: lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-view" */)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		component: lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */)),
	},
	{
		path: '/contacts',
		label: 'Contacts',
		exact: true,
		component: lazy(() => import('./views/ContactsView' /* webpackChunkName: "contacts-view" */)),
	},
];
