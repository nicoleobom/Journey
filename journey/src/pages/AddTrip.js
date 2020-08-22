import React from 'react';
import Question1 from '../components/Question1/index';
import Question2 from '../components/Question2/index';
import Question3 from '../components/Question3/index';
import Question4 from '../components/Question4/index';
import Question5 from '../components/Question5/index';
import Question6 from '../components/Question6/index';
import Question7 from '../components/Question7/index';
import Question8 from '../components/Question8/index';
import AddTripQuestions from '../assets/questions/questions';

import '../index.css';

class AddTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: AddTripQuestions
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 questionheader">
                    <Question1 />
                    <Question2 />
                    <Question3 />
                    <Question4 />
                    <Question5 />
                    <Question6 />
                    <Question7 />
                    <Question8 />
                </div>
            </div>
        );
    }
}

export default AddTrip;