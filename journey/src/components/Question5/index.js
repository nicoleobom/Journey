import React from 'react';
import Circles from '../Circles/index';

// <button className="circle"><i class="fas fa-car fa-2x"></i></button>
{/* <button className="circle"><i class="fas fa-bus-alt fa-2x"></i></button>
<button className="circle"><i class="fas fa-train fa-2x"></i></button>
<button className="circle"><i class="fas fa-plane fa-2x"></i></button> */}

class Question5 extends React.Component {
    render() {
        return(
            <div>
                <h3>How do you want to get there?</h3>
                <Circles />
            </div>
        );
    }
}

export default Question5;