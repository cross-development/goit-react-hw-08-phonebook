//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Login.module.css';

const Login = ({ email, password, handleChange, handleSubmit }) => (
	<div>
		<h1>Login page</h1>

		<form onSubmit={handleSubmit} className={styles.form}>
			<label className={styles.label}>
				Email
				<input type="email" name="email" value={email} onChange={handleChange} />
			</label>

			<label className={styles.label}>
				Password
				<input type="password" name="password" value={password} onChange={handleChange} />
			</label>

			<button type="submit" className={styles.button}>
				Login
			</button>
		</form>
	</div>
);

Login.propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Login;
