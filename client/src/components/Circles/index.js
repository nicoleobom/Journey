import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Circles({ icon }) {
    return (
        <div>
            <audio id="myaudio" src={require("../../assets/sounds/zapsplat_cartoon_bubble_pop_007_40279.mp3")}></audio>
            <button onmouseover="document.getElementById('myaudio')" className="circle"><FontAwesomeIcon icon={icon} size="2x" /></button>
        </div>
    );
}

export default Circles;