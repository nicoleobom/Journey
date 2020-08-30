import React, { useState } from 'react';
import './index.css';
import DatePicker from 'react-date-picker';

function Question6 (props) {
    const [value, onChange] = useState(new Date());
    const [val2, onChange2] = useState(new Date())

    if (props.currentQuestion !== 6) {
        return null;
    }

    return(
        <div className="bg-q">
            <h3>When would you like to go?</h3>
            <div className="date">
                <DatePicker
                    className="cal"
                    onChange={onChange}
                    value={value}
                /><br />
                <DatePicker
                    className="cal"
                    onChange={onChange2}
                    value={val2}
                />
            </div>
        </div>
    );
}

export default Question6;