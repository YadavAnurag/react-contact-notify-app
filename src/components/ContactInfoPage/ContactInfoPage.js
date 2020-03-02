import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ContactInfoPage = (props)=>{
  const { 
    id = 0, 
    firstName='firstName', 
    middleName='middleName',
    lastName='lastName',
    contactNumber='0000000000',
    email='anuragyadav13481@gmail.com'
  } = props.contact;

  const fullName = [firstName, middleName, lastName].join(' ');

  return (
    <div>
      <h2 className='component-title'>Contact Info</h2>
      <div className='component-body'>
        <div className='contact'>
          <p className='contact__name'>{fullName}</p>
          <p className='contact__number'>{contactNumber}</p>
          <p className='contact__email'>{email}</p>
        </div>
        <div className='contact-button-div'>
          <div className='button-div'>
            <Link to={`/compose/${id}`}>
              <button className='button'>Message</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToPorps = (state, props)=>({
  contact: state.contacts.find(contact => contact.id === props.match.params.id)
});
export default connect(mapStateToPorps)(ContactInfoPage);