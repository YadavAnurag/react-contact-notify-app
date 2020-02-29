import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ()=>(
  <div>
    <h2>App Name</h2>
    <NavLink to='/' activeClassName='is-active' exact={true} >Dashboard</NavLink>
    <NavLink to='/messages' activeClassName='is-active' exact={true} >Messages</NavLink>
  </div>
);

export default Header;