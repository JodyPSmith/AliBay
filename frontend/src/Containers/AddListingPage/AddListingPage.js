import React, { Component } from 'react';
import AddListing from '../../components/addListing/addListing';
import Navigation from '../../components/Navigation/Navigation'


class AddListingPage extends Component {
    render() {
        const { signedIn, route, setRoute } = this.props;
        return (
            <div>
                <Navigation 
                setRoute={setRoute}
                route={route}
                signedIn={signedIn}/>
                
                <AddListing setRoute={this.props.setRoute}/>
            </div>
        )
    }
}

export default AddListingPage;