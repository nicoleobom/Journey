import React from 'react';

function Question6 (props) {
    if (props.currentQuestion != 6) {
        return null;
    }
    return(
        <div>
            <h3>When would you like to go?</h3>
        </div>
    );
}

export default Question6;