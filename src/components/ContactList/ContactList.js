import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import './ContactList.css';
import { connect } from 'react-redux';

const ContactList = ({ contacts })=>(
  <div>
    <h2>ContactList</h2>
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
);

const mapStateToProps = (state)=>({
  contacts: state.contacts
});
export default connect(mapStateToProps)(ContactList);