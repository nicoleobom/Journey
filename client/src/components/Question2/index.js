import React from 'react';
import './index.css';
import SearchBar from 'material-ui-search-bar';

export default class Question2 extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         endpoint: '',
    //     }
    //     this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.autocomplete = null;
        
    // }

    // componentDidMount = () => {
    //     /*global google*/
    //     this.autocomplete = new google.maps.places.Autocomplete(
    //         document.getElementById('autocomplete2'), {}
    //     )

    //     this.autocomplete.addListener('place_changed', this.handlePlaceSelect)
    // }

    // handleChange(event) {
    //     this.setState({ [event.target.name]: event.target.value })
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.props.dispatch(this.state);
    //     this.clearForm();
    // }

    // handlePlaceSelect() {
    //     let addressObject = this.autocomplete.getPlace();
    //     let newAddress ='';
    //     const address = addressObject.address_components;
    //     for (var i=0; i < address.length; i++) {
    //         let component = address[i].long_name
    //         newAddress = newAddress + component + ' ';
    //     }
    //     console.log(newAddress)
    //     this.setState({
    //         endpoint: (newAddress)
    //     });
    // }

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q1">
                <form className="col-sm-12 header bg-q">
                    <h3>Where are you going?</h3>
                    <input type="text" onChange={this.props.handleChange('endpoint')} defaultValue={values.endpoint} placeholder="Search..."></input>
                    {/* <SearchBar
                        id="autocomplete"
                        type="text"
                        placeholder="Search places..."
                        onSubmit={this.nextQuestion}
                        value={this.state.startpoint} 
                        style={{
                            margin: '0 auto',
                            maxWidth: 500,
                        }}
                    /> */}
                </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
                <button className="back" onClick={this.back}>Back</button>
            </div>
        )
    }

}