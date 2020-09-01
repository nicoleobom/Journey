import React from 'react';
import Circles from '../components/Circles/index';
import { faCar, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import API from '../utils/API';

// function Home(props) {
//     return(
//         <div className="row">
//             <div className="col-sm-12 header">
//                 <h1>Welcome, {props.firstname}</h1>
//                 <Link to="/past-trips"><Circles icon={faCar}/></Link>
//                 <Link to="/settings"><Circles icon={faCog}/></Link>
//                 <Link to="/new-trip"><Circles icon={faPlus}/></Link>
//             </div>
//         </div>

//     );
// }

// export default Home;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: 0, 
            firstname: "",
            users: []
        }
    }

    componentDidMount() {
        this.userFirstName();
        // API.getUsers(this.state.firstname)
        //     .then(res => {
        //         console.log(res.data);

        //         if (res.data.length === 0) {
        //             throw new Error("No data found");
        //         }
        //         if (res.data.status === 'error') {
        //             throw new Error(res.data.message);
        //         }
        //         debugger;
        //         let userArray = [];

        //         for (var i=0; i<res.data.length; i++) {
        //             if (res.data[i].length !== 0) {
        //                 userArray.push(res.data[i]);
        //             }
        //         }

        //         console.log(userArray);

        //         this.setState({
        //             users: userArray
        //         });
        //     });
    }

    userFirstName = async () => {
        debugger;
        const { id, firstname } = this.props.match.params;
        const user = (await API.getUserData()).data;
        console.log(user.firstname);

    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 header">
                    <h1>Welcome, </h1>
                    <Link to="/past-trips"><Circles icon={faCar}/></Link>
                    <Link to="/settings"><Circles icon={faCog}/></Link>
                    <Link to="/new-trip"><Circles icon={faPlus}/></Link>
                </div>
            </div>
        );
    }
}