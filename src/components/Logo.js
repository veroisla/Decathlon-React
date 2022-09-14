import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/components/Logo.scss';

function Logo() {
  return (
    <Link to={'/'}>
      {' '}
      <div className="header__menu--logo">
        <img
          className="header__menu--logoImg"
          src={logo}
          alt="logo decathlon"
          title="Decthlon, página principal"
        />
      </div>
    </Link>
  );
}

export default Logo;
