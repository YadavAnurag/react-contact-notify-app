import React from 'react';
import './ContactInfoPage.css';
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

  return (
    <div>
      <h2>ContactInfoPage</h2>
      <div>
        <p>{firstName}{middleName}{lastName}</p>
        <p>{contactNumber}</p>
        <p>{email}</p>
      </div>
      <Link to={`/compose/${id}`}>
        <button>Send Message</button>
      </Link>
    </div>
  )
};

const mapStateToPorps = (state, props)=>({
  contact: state.contacts.find(contact => contact.id === props.match.params.id)
});
export default connect(mapStateToPorps)(ContactInfoPage);