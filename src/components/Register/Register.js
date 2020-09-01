//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { authOperations } from 'redux/auth';
//Styles
import styles from './Register.module.css';

class Register extends Component {
	static propTypes = {
		onRegister: PropTypes.func.isRequired,
	};

	state = {
		name: null,
		email: null,
		password: null,
	};

	render() {
		return <form></form>;
	}
}

const mapDispatchToProps = {
	onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
