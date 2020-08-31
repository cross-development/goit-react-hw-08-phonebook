//Core
import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//Components
import Layout from '../Layout';
import Spinner from '../Spinner';
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
					<Suspense fallback={<Spinner />}>
						<Switch>
							{routes.map(router => (
								<Route key={router.label} {...router} />
							))}
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
