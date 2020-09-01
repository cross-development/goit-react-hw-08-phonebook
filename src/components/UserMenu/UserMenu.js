import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = props => {
	return <div></div>;
};

UserMenu.propTypes = {};

const mapStateToProps = state => ({
	getUserEmail: authSelectors.getUserEmail(state),
	isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
	onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
