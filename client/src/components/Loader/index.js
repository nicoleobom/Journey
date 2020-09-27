import React from 'react';
import './index.css';

export default function Loader() {
    return (
        <div className="row height">
            <div className="col-sm-12 center loader">
                <img id="car" src={require('../../assets/images/car-loading.png')} width="100px" alt="car" />
            </div>
        </div>
    )
}