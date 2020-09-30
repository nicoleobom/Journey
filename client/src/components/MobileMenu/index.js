import React from 'react';
import MobileNav from '../MobileNav/index';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ 
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }

    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        };
    }

    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';
        if (window.location.pathname.match(/login/) || window.location.pathname.match(/logout/) || window.location.pathname.match(/signup/) || window.location.pathname.match(/forgot-password/)){
            return null;
        } else {
            document.addEventListener('click', this._handleDocumentClick, false);
            return(
                <div ref = "root">
                    <div className="menubar">
                        <div className="hambclicker" onClick={ this._menuToggle }>
                        <i className="fa fa-bars"></i>
                        </div>
                        <div className="hambmenu" className={ menuStatus }>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="title">
                            <span> {this.props.title} </span>
                        </div>
                    </div>
                    <MobileNav menuStatus={ menuStatus } />
                </div>
            )
        }
    }
}