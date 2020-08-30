import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Circles({ icon }) {
    return (
        <button className="circle"><FontAwesomeIcon icon={icon} size="2x" /></button>
    );
}

export default Circles;