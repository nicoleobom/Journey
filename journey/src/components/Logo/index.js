import React from 'react';
import logo from '../../assets/images/logo.png';

function Logo() {
    return (
        <a className="navbar-brand float-left logo" href="#">
            <img src={logo} height="40" alt="journey"/>
        </a>
    );
}

export default Logo;