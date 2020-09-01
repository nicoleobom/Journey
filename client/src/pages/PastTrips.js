import React from 'react';
import API from '../utils/API';

export default class PastTrips extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            firstname: ""
        }
    }

    componentDidMount() {
        this.userFirstName();
    }

    userFirstName = async () => {
        const user = (await API.getUserData()).data;
        this.setState({
            firstname: user.firstname
        })
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 header">
                    <h3>{this.state.firstname}'s Trips</h3>
                </div>
            </div>
        );
    }
}