import React from 'react';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import './index.css';
import Logo from '../Logo/index';
import swal from 'sweetalert';

function Nav(props) {
    const history = useHistory();
    const location = useLocation();
    if (location.pathname.match(/login/) || location.pathname.match(/logout/) || location.pathname.match(/signup/) || location.pathname.match(/forgot-password/)) {
        return null && location.reload();
    }

    function confirmRedirect(e) {
        const name = e.currentTarget.name;
        console.log(name);
        if (location.pathname.match(/new-trip/)) {
            swal({
                title: "Are you sure?",
                text: "Your progress will be lost!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((confirm) => {
                if (confirm) {
                    history.push(name);
                } else {
                    return;
                }
            })
        } else {
            history.push(name);
        }
    }   

    return (
        <div className="row" id="nav">
            <nav className="col-sm-6 cols">
                <button name="/" onClick={confirmRedirect}><Logo /></button>
            </nav>
            <nav className="col-sm-6 cols">
                <button name="/" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-home" ></i></button>
                <button name="/new-trip" id="newtrip" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-plus"></i></button>
                <button name="/past-trips" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-car"></i></button>
                <button name="/settings" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-cog"></i></button>
                <button name="/logout" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-sign-out-alt"></i></button>
            </nav>
        </div>
    );
}

export default withRouter(Nav);