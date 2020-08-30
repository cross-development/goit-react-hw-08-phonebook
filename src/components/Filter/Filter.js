//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
	<div className={styles.filterWrapper}>
		<label>
			Find contacts by name
			<input
				className={styles.input}
				type="text"
				autoComplete="off"
				value={value}
				onChange={e => onChangeFilter(e.target.value)}
			/>
		</label>
	</div>
);

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
