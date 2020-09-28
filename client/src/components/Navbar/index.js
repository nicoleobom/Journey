import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import './index.css';
import Logo from '../Logo/index';
import swal from 'sweetalert';

function Nav(props) {
    const history = useHistory();
    const { location } = props;
    if (location.pathname.match(/login/) || location.pathname.match(/logout/) || location.pathname.match(/signup/) || location.pathname.match(/forgot-password/)) {
        return null && location.reload();
    }

    function confirmRedirectHome(e) {
        e.preventDefault();
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
                    history.push("/");
                } else {
                    return;
                }
            })
        } else {
            history.push("/");
        }
    }       

    function confirmRedirectNewTrip(e) {
        e.preventDefault();
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
                    history.push("/new-trip");
                } else {
                    return;
                }
            })
        } else {
            history.push("/new-trip");
        }
    }       

    function confirmRedirectPastTrips(e) {
        e.preventDefault();
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
                    history.push("/past-trips");
                } else {
                    return;
                }
            })
        } else {
            history.push("/past-trips");
        }
    }       

    function confirmRedirectSettings(e) {
        e.preventDefault();
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
                    history.push("/settings");
                } else {
                    return;
                }
            })
        } else {
            history.push("/settings");
        }
    }       

    function confirmRedirectLogout(e) {
        e.preventDefault();
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
                    history.push("/logout");
                } else {
                    return;
                }
            })
        } else {
            history.push("/logout");
        }
    }       

    return (
        <div className="row" id="nav">
            <nav className="col-sm-6 cols">
                <Link to="/"><Logo /></Link>
            </nav>
            <nav className="col-sm-6 cols">
                <Link to="/" className="navbar-brand"><i className="fas fa-home" onClick={confirmRedirectHome}></i></Link>
                <Link to="/new-trip" id="newtrip" className="navbar-brand" onClick={confirmRedirectNewTrip}><i className="fas fa-plus"></i></Link>
                <Link to="/past-trips" className="navbar-brand" onClick={confirmRedirectPastTrips}><i className="fas fa-car"></i></Link>
                <Link to="/settings" className="navbar-brand" onClick={confirmRedirectSettings}><i className="fas fa-cog"></i></Link>
                <Link to="/logout" className="navbar-brand" onClick={confirmRedirectLogout}><i className="fas fa-sign-out-alt"></i></Link>
            </nav>
        </div>
    );
}

export default withRouter(Nav);