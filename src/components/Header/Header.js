import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=>(
  <div className='header'>
    <div className='brand-div'>
      <h2 className='brand'>Kisan Network</h2>
    </div>
    <div className='nav'>
      <NavLink to='/' activeClassName='is-active' className='nav-link' exact={true} >Dashboard</NavLink>
      <NavLink to='/messages' activeClassName='is-active' className='nav-link' exact={true} >Messages</NavLink>
    </div>
  </div>
);

export default Header;