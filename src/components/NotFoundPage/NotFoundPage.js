import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props)=>(
  <div>
    <h2 className='component-title'>404 - Not Found</h2>
    <div className='component-body' style={{textAlign: "center", paddingBottom: "5rem"}}>
      <p style={{color: "red"}}>Can't resolve {props.location.pathname}</p>
      <p>Return to homepage</p> 
      <Link to='/'>
        <button className='button'>Home</button>
      </Link>
    </div>
  </div>
);

export default NotFoundPage;