import React from 'react';
import './ContactListItem.css';
import { Link } from 'react-router-dom';

const ContactListItem = ({ id, firstName, middleName, lastName })=>(
  <div>
    <Link to={`/info/${id}`}>
      <h4>{firstName}{middleName}{lastName}</h4>
    </Link>
  </div>
);

export default ContactListItem;