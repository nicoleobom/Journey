import React, { useState } from 'react';
import './index.css';
import DatePicker from 'react-date-picker';

function Question6 (props) {
    const [value, onChange] = useState(new Date());

    if (props.currentQuestion !== 6) {
        return null;
    }

    return(
        <div>
            <h3>When would you like to go?</h3>
            <div className="date">
                <DatePicker
                    onChange={onChange}
                    value={value}
                />
                <DatePicker
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    );
}

export default Question6;