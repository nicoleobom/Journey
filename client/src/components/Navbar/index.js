import React from 'react';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import './index.css';
import Logo from '../Logo/index';
import swal from 'sweetalert';
import ReactTooltip from "react-tooltip";

function Nav(props) {
    const history = useHistory();
    const location = useLocation();
    if (location.pathname.match(/login/) || location.pathname.match(/logout/) || location.pathname.match(/signup/) || location.pathname.match(/forgot-password/)) {
        return null && location.reload();
    }

    function confirmRedirect(e) {
        const name = e.currentTarget.name;
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
                <button name="/" className="navbar-brand" onClick={confirmRedirect}><Logo /></button>
            </nav>
            <nav className="col-sm-6 cols-2">
                <button name="/" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-home" data-tip data-for="home"></i></button>
                <ReactTooltip id="home" place="bottom" className="customTheme">
                <span>Home</span>
                </ReactTooltip>
                <button name="/new-trip" id="newtrip" data-tip data-for="new-trip" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-plus"></i></button>
                <ReactTooltip id="new-trip" place="bottom" className="customTheme">
                <span>New Trip</span>
                </ReactTooltip>
                <button name="/past-trips" className="navbar-brand" data-tip data-for="past-trips" onClick={confirmRedirect}><i className="fas fa-car"></i></button>
                <ReactTooltip id="past-trips" place="bottom" className="customTheme">
                <span>Past Trips</span>
                </ReactTooltip>
                <button name="/settings" data-tip data-for="settings" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-cog"></i></button>
                <ReactTooltip id="settings" place="bottom" className="customTheme">
                <span>Settings</span>
                </ReactTooltip>
                <button name="/logout" data-tip data-for="logout" className="navbar-brand" onClick={confirmRedirect}><i className="fas fa-sign-out-alt"></i></button>
                <ReactTooltip id="logout" place="bottom" className="customTheme">
                <span>Logout</span>
                </ReactTooltip>
            </nav>
        </div>
    );
}

export default withRouter(Nav);