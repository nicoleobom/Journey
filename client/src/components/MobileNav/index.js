import React from 'react';
import './index.css';

export default class MobileNav extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ 
            links: [{
                text: 'Home',
                link: '/home',
                icon: 'fa-home'
            }, {
                text: 'Add Trip',
                link: '/new-trip',
                icon: 'fa-plus'
            }, {
                text: 'Past Trips',
                link: '/past-trips',
                icon: 'fa-car'
            }, {
                text: 'Settings',
                link: '/settings',
                icon: 'fa-cog'
            }, {
                text: 'Logout',
                link: 'logout',
                icon: 'fa-sign-out-alt'
            }]
        }
    }    

    render() {
        let links = this.state.links.map((link, i) => <li key={i} ref={i + 1}><i aria-hidden="true" className={`fa ${link.icon}`}></i><a href={link.link}>{link.text}</a></li>)
            return(
                <div className={this.props.menuStatus} id='menu'>
                    <ul>
                        { links }
                    </ul>
                </div>
            );
        }
}