//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
//Components
import Logo from '../Logo';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';
//Redux
import { authSelectors } from 'redux/auth';
//Styles
import styles from './AppBar.module.css';
import fadeLogo from 'animation/fadeLogo.module.css';

const AppBar = ({ isAuthenticated }) => (
	<header className={styles.header}>
		<CSSTransition in={true} classNames={fadeLogo} timeout={500} appear unmountOnExit>
			<Logo />
		</CSSTransition>

		<Navigation />
		{isAuthenticated ? <UserMenu /> : <AuthNav />}
	</header>
);

AppBar.defaultProps = {
	isAuthenticated: null,
};

AppBar.propTypes = {
	isAuthenticated: PropTypes.string,
};

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
