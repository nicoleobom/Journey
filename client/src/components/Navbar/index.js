import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.css';
import Logo from '../Logo/index';
import swal from 'sweetalert';

function Nav(props) {
    const { location } = props;
    if (location.pathname.match(/login/) || location.pathname.match(/logout/) || location.pathname.match(/signup/) || location.pathname.match(/forgot-password/)) {
        return null && location.reload();
    }

    

    return (
        <div className="row" id="nav">
            <nav className="col-sm-6 cols">
                <Link to="/"><Logo /></Link>
            </nav>
            <nav className="col-sm-6 cols">
                <Link to="/" className="navbar-brand"><i className="fas fa-home"></i></Link>
                <Link to="/new-trip" id="newtrip" className="navbar-brand"><i className="fas fa-plus"></i></Link>
                <Link to="/past-trips" className="navbar-brand"><i className="fas fa-car"></i></Link>
                <Link to="/settings" className="navbar-brand"><i className="fas fa-cog"></i></Link>
                <Link to="/logout" className="navbar-brand"><i className="fas fa-sign-out-alt"></i></Link>
            </nav>
        </div>
    );
}

export default withRouter(Nav);