import React, { Component } from 'react';
import AddListing from '../../components/addListing/addListing';
import Navigation from '../../components/Navigation/Navigation'
import logo from '../../images/Alibay.png';

class AddListingPage extends Component {
    render() {
        const { signedIn, route, setRoute } = this.props;
        return (
            <div>
                <Navigation 
                setRoute={setRoute}
                route={route}
                signedIn={signedIn}/>
                <img alt="Alibay Logo" src={logo}/>
                <AddListing setRoute={this.props.setRoute}/>
            </div>
        )
    }
}

export default AddListingPage;