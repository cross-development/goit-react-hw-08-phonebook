//Core
import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//Components
import Layout from '../Layout';
import Loader from '../Loader';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';
//Router
import routes from 'routes';
//Redux
import { authOperations } from 'redux/auth';

export class App extends Component {
	static propTypes = {
		onGetCurrentUser: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.onGetCurrentUser();
	}

	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Suspense fallback={<Loader />}>
						<Switch>
							{routes.map(route =>
								route.private ? (
									<PrivateRoute key={route.path} {...route} />
								) : (
									<PublicRoute key={route.path} {...route} />
								),
							)}
						</Switch>
					</Suspense>
				</Layout>
			</BrowserRouter>
		);
	}
}

const mapDispatchToProps = {
	onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
