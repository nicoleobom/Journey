import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../Logo/index';

export default class MobileNav extends React.Component {    
    openMobileNav() {
        var links = document.getElementById('myLinks');
        if (links.style.visibility === 'visible') {
            links.style.visibility = 'hidden';
        } else {
            links.style.visibility = 'visible';
        }
    }
    
    render() {
        if (window.location.pathname.match(/login/) || window.location.pathname.match(/logout/) || window.location.pathname.match(/signup/)){
            return null;
        } else {
            return(
                <Row id="m-nav" className="mobile-container">
                    <Col>
                        <Link to="/"><Logo /></Link>
                        <div class="topnav">
                            <div id="myLinks">
                                <Link to="/" onClick={this.openMobileNav}><i className="fas fa-home"></i></Link>
                                <Link to="/new-trip" onClick={this.openMobileNav}><i className="fas fa-plus"></i></Link>
                                <Link to="/past-trips" onClick={this.openMobileNav}><i className="fas fa-car"></i></Link>
                                <Link to="/settings" onClick={this.openMobileNav}><i className="fas fa-cog"></i></Link>
                                <Link to="/logout" onClick={this.openMobileNav}><i className="fas fa-sign-out-alt"></i></Link>
                            </div>
                            <a class="icons" onClick={this.openMobileNav}>
                                <i class="fa fa-bars"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            );
        }
    }
}