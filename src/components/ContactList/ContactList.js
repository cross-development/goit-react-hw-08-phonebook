//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Components
import ContactListItem from '../ContactListItem';
//Redux
import { contactsSelectors } from 'redux/contacts';
//Styles
import styles from './ContactList.module.css';
import fadeContactList from 'animation/fadeContactList.module.css';

const ContactList = ({ contacts }) => (
	<TransitionGroup component="ul" className={styles.contactList}>
		{contacts.map(({ id }) => (
			<CSSTransition key={id} timeout={250} classNames={fadeContactList}>
				<ContactListItem id={id} />
			</CSSTransition>
		))}
	</TransitionGroup>
);

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = state => ({
	contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
