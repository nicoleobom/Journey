import React from 'react';

function Question7 (props) {
    if (props.currentQuestion !== 7) {
        return null;
    }
        return(
            <div>
                <h3>What kinds of places do you want to stop at?</h3>
            </div>
        );
}

export default Question7;