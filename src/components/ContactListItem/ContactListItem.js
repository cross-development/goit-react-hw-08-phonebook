//Core
import React from 'react';
import PropTypes from 'prop-types';
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

export default ContactListItem;
