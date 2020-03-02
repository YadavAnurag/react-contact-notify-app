import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


const MessagesListItem = (props)=>{

  const { contactId, otp, createdAt } = props.message;
  const { firstName, middleName, lastName } = { ...props.getContact(contactId) };
  const fullName = [firstName, middleName, lastName].join(' ');

  return (
    // <div>
    //   <p>{fullName} - {otp}</p>
    //   <p>{moment(createdAt).format('MMM Do, YYYY')}</p>
    // </div>
    <div className='list-item'>
      <div className='list-item-link'>
        <div className='list_item-link__name_otp_div'>
          <p className='message-list-item-link__name'>{fullName}</p>
          <p className='message-list-item-link__otp'>OTP- {otp}</p>
        </div>
        <p className='message-list-item-link__contact'>{moment(createdAt).format('MMM Do, YYYY')}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>({
  getContact : (contactId)=> state.contacts.find(contact => contact.id === contactId)
});
export default connect(mapStateToProps)(MessagesListItem);