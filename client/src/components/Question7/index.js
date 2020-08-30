import React from 'react';
import Checkbox from '../Checkboxes/index';

function Question7 (props) {
    if (props.currentQuestion !== 7) {
        return null;
    }
        return(
            <div className="bg-q">
                <h3>What kinds of places do you want to stop at?</h3>
                <Checkbox />
            </div>
        );
}

export default Question7;