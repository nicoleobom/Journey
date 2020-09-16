import React from 'react';
import logo from '../../assets/images/logo.png';
import './index.css';

function Logo() {
    return (
        <div className="navbar-brand float-left logo">
            <img src={logo} height="40" alt="journey"/>
        </div>
    );
}

export default Logo;