//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
//Styles
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
	<nav className={styles.nav}>
		<NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
			Home
		</NavLink>

		{isAuthenticated && (
			<NavLink to="/contacts" exact className={styles.link} activeClassName={styles.activeLink}>
				Contacts
			</NavLink>
		)}
	</nav>
);

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
