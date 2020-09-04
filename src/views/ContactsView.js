//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Components
import Main from 'components/Main';
import Filter from 'components/Filter';
import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
//Redux
import { contactsOperations, contactsSelectors } from 'redux/contacts';

class ContactsView extends Component {
	static propTypes = {
		onGetContacts: PropTypes.func.isRequired,
		contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	};

	componentDidMount() {
		this.props.onGetContacts();
	}

	render() {
		const { contacts } = this.props;

		return (
			<Main>
				<Section>
					<ContactForm />
					{contacts.length > 1 && <Filter />}
				</Section>

				{contacts.length > 0 && (
					<Section>
						<ContactList />
					</Section>
				)}
			</Main>
		);
	}
}

const mapStateToProps = state => ({
	contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
	onGetContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
