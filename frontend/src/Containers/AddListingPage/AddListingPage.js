import React, { Component } from 'react';
import AddListing from '../../components/addListing/addListing';


class AddListingPage extends Component {
    render() {
        return (
            <div>
                <AddListing setRoute={this.props.setRoute} />
            </div>
        )
    }
}

export default AddListingPage;