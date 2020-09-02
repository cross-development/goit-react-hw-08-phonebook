//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { contactsOperations, contactsSelectors } from 'redux/contacts';
//Styles
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onRemove }) => (
	<li className={styles.listItem}>
		<p className={styles.contact}>
			<span>{name}:</span> {number}
		</p>

		<button type="button" className={styles.button} onClick={onRemove}>
			&#10006;
		</button>
	</li>
);

ContactListItem.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { id }) => ({
	...contactsSelectors.getContactById(state, id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
	onRemove: () => dispatch(contactsOperations.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
