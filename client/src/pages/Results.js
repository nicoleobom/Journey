import React from 'react';
import Circles from '../components/Circles/index';

function Results(props) {
    return(
        <div className="row">
        <div className="col-sm-12 header">
            <h3>Nicole's Trip to Nashville, TN</h3>
            <p>{props.currentAddress}</p>
            <Circles />
            <Circles />
            <Circles />
        </div>
    </div>
    )
}

export default Results;