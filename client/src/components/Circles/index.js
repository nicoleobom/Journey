import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Circles({ icon }) {
    return (
        <div>
            <button className="circle"><FontAwesomeIcon icon={icon} size="2x" /></button>
        </div>
    );
}

export default Circles;