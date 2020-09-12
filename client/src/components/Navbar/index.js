import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.css';
import Logo from '../Logo/index';

function Nav(props) {
    const { location } = props;
    if (location.pathname.match(/login/) || location.pathname.match(/signup/)){
        return null;
    }
    
    return(
        <div>
            <nav className="navbar navstyle float-left">
                <Logo />
            </nav>
            <nav className="navbar navstyle float-right">
                <Link to="/" className="navbar-brand"><i className="fas fa-home"></i></Link>
                <Link to="/new-trip" className="navbar-brand"><i className="fas fa-plus"></i></Link>
                <Link to="/past-trips" className="navbar-brand"><i className="fas fa-car"></i></Link>
                <Link to="/settings" className="navbar-brand"><i className="fas fa-cog"></i></Link>
                <Link to="/logout" className="navbar-brand"><i className="fas fa-sign-out-alt"></i></Link>
            </nav>
        </div>
    )
}

export default withRouter(Nav);