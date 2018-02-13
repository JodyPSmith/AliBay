import React, { Component } from 'react';
import AddListing from '../../components/addListing/addListing'
import logo from '../../images/Alibay.png'

class AddListingPage extends Component {
    render() {
        return (
            <div>
                <img alt="Alibay Logo" src={logo}/>
                <AddListing/>
            </div>
        )
    }
}

export default AddListingPage;