//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ component: Component, isAuth, ...routeProps }) => (
	<Route
		{...routeProps}
		render={props => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)}
	/>
);

const mapStateToProps = state => ({
	isAuth: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
