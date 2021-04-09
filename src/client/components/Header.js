import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const isLogin = !!auth
  const authButton = isLogin 
    ? <a href="/api/logout">Logout</a> 
    : <a href='/api/auth/google'>Login</a>;
  
  
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to='/'>React SSR</Link>
        <ul className="right">
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/admins'>admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  )
}


function selector({ auth }) {
  return { auth };
}

export default connect(selector, null)(Header);