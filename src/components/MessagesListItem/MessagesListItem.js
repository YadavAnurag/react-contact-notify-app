import React from 'react';
import './MessagesListItem.css';
import { connect } from 'react-redux';
import moment from 'moment';

const MessagesListItem = (props)=>{
  const { contactId, otp, createdAt } = props.message;
  const { firstName, middleName, lastName } = { ...props.getContact(contactId) };
  const fullName = [firstName, middleName, lastName].join(' ');

  return (
    <div>
      <p>{fullName} - {otp}</p>
      <p>{moment(createdAt).format('MMM Do, YYYY')}</p>
    </div>
  );
}

const mapStateToProps = (state)=>({
  getContact : (contactId)=> state.contacts.find(contact => contact.id === contactId)
});
export default connect(mapStateToProps)(MessagesListItem);