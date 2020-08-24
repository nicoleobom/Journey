import React from 'react';
import logo from '../../assets/images/logo.png';
import './index.css';

function Logo() {
    return (
        <a className="navbar-brand float-left logo" href="/home">
            <img src={logo} height="40" alt="journey"/>
        </a>
    );
}

export default Logo;