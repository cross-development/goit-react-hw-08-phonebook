//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Register.module.css';

const Register = ({ name, email, password, handleChange, handleSubmit }) => (
	<div>
		<h1>Register page</h1>

		<form onSubmit={handleSubmit} className={styles.form}>
			<label className={styles.label}>
				Name
				<input type="text" name="name" value={name} onChange={handleChange} />
			</label>

			<label className={styles.label}>
				Email
				<input type="email" name="email" value={email} onChange={handleChange} />
			</label>

			<label className={styles.label}>
				Password
				<input type="password" name="password" value={password} onChange={handleChange} />
			</label>

			<button type="submit">Register</button>
		</form>
	</div>
);

Register.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Register;
