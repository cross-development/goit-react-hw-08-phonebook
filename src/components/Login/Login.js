import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { authOperations } from 'redux/auth';
//Styles
import styles from './Login.module.css';

class Login extends Component {
	static propTypes = {
		onLogin: PropTypes.func.isRequired,
	};

	state = {
		name: '',
		number: '',
	};

	render() {
		return <form></form>;
	}
}

const mapDispatchToProps = {
	onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(Login);
