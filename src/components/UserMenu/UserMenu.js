import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { authOperations, authSelectors } from 'redux/auth';
//Styles
import styles from './UserMenu.module.css';

const UserMenu = ({ email, onLogout }) => (
	<div className={styles.container}>
		<span className={styles.email}>Welcome, {email}</span>
		<button className={styles.button} type="button" onClick={onLogout}>
			Logout
		</button>
	</div>
);

//Пофиксить проптайпы по имейлу
UserMenu.propTypes = {
	email: PropTypes.string,
	onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
	onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
