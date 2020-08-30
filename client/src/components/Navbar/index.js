import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.css';

function Nav(props) {
    const { location } = props;
    if (location.pathname.match(/login/)){
        return null;
    }
    
    return(
        <nav className="navbar navstyle float-right">
            <Link to="/" className="navbar-brand"><i className="fas fa-home"></i></Link>
            <Link to="/new-trip" className="navbar-brand"><i className="fas fa-car"></i></Link>
            <Link to="/settings" className="navbar-brand"><i className="fas fa-cog"></i></Link>
            <Link to="/logout" className="navbar-brand"><i className="fas fa-sign-out-alt"></i></Link>
        </nav>
    )
}

export default withRouter(Nav);