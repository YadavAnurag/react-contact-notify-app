import React from 'react';
import { Link } from 'react-router-dom';

const ContactListItem = ({ id, firstName, middleName, lastName, contactNumber })=>{
  const fullName = [firstName, middleName, lastName].join(' ');
  return (
    <div className='list-item'>
      <Link to={`/info/${id}`} className='list-item-link'>
        <p className='contact-list-item-link__name'>{fullName}</p>
        <p className='contact-list-item-link__contact'>{contactNumber}</p>
      </Link>
    </div>
  );
}

export default ContactListItem;