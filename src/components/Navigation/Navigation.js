//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Routes
import routes from '../../routes';
//Styles
import styles from './Navigation.module.css';

const Navigation = () => (
	<nav>
		{routes.map(({ label, exact, path }) => (
			<NavLink
				to={path}
				key={label}
				exact={exact}
				className={styles.link}
				activeClassName={styles.activeLink}
			>
				{label}
			</NavLink>
		))}
	</nav>
);

export default Navigation;
