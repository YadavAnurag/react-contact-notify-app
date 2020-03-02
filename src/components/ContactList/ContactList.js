import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import { connect } from 'react-redux';

const ContactList = ({ contacts })=>(
  <div>
    <h2 className='component-title'>Contacts</h2>
    <div className='component-body'>
      {
        contacts.length === 0 ? (
          <p>No contacts</p>
        ) : (
          contacts.map((contact)=>(
            <ContactListItem key={contact.id} {...contact} />
          ))
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state)=>({
  contacts: state.contacts
});
export default connect(mapStateToProps)(ContactList);