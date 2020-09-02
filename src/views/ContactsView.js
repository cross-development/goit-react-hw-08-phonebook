//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Components
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
//Redux
import { contactsOperations, contactsSelectors } from 'redux/contacts';

class ContactsView extends Component {
	static propTypes = {
		onGetContacts: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.onGetContacts();
	}

	render() {
		return (
			<>
				<ContactForm />
				<Filter />
				<ContactList />
			</>
		);
	}
}

const mapStateToProps = state => ({
	isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onGetContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
