//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Components
import Error from 'components/Error';
import Login from 'components/Login';
//Redux
import { authOperations, authSelectors } from 'redux/auth';

class LoginView extends Component {
	static propTypes = {
		onLogin: PropTypes.func.isRequired,
		hasError: PropTypes.object,
	};

	static defaultProps = {
		hasError: null,
	};

	state = {
		email: '',
		password: '',
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		this.props.onLogin({ ...this.state });
		this.setState({ email: '', password: '' });
	};

	defineErrorType = () => {
		const { hasError } = this.props;
		return hasError && hasError.config.url.includes('login');
	};

	render() {
		const isErrorTypeLogin = this.defineErrorType();

		return (
			<>
				<Login {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />

				{isErrorTypeLogin && <Error message="User with this email address not found" />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	hasError: authSelectors.hasError(state),
});

const mapDispatchToProps = {
	onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
