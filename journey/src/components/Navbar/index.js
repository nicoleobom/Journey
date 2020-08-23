import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Nav() {
    return(
        <nav className="navbar navstyle float-right">
            <Link to="/" className="navbar-brand"><i class="fas fa-home"></i></Link>
            <Link to="/new-trip" className="navbar-brand"><i class="fas fa-car"></i></Link>
            <Link to="/settings" className="navbar-brand"><i class="fas fa-cog"></i></Link>
            <Link to="/logout" className="navbar-brand"><i class="fas fa-sign-out-alt"></i></Link>
        </nav>
    )
}

export default Nav;