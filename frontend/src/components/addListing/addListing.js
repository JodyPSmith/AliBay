import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import Imageupload from '../Imageupload/imageupload'
class AddListing extends Component {
    constructor() {
        super();
        this.state = { accepted: [], rejected : [] }
    }
    onImageDrop = (accepted, rejected) => {
        this.setState({ accepted, rejected });
        //console.log(accepted);
    }

    createListing = () => {
        var newItem = { "sellerID": 12345, "title": this.title.value, "price": this.price.value, "description": this.desc.value, "images" : this.state.accepted, "location": this.location.value }
        console.log(newItem);
        // need to add redirect to for sale items in the below fetch once the end point is ready
        fetch('/createListing', {
            method: "POST",
            enctype: "multipart/form-data",
            body: JSON.stringify(newItem),
            credentials: "include"
        })
            .then(x => x.text())
            .then(y => console.log(y))
    }

    render() {
        var newListing = (
            <div>
                <Imageupload onImageDrop={this.onImageDrop} />
                <input required ref={r => this.title = r} placeholder="Title" />
                <input required ref={r => this.price = r} placeholder="Price" type="number" min="0" step="0.01" />
                <input required ref={r => this.desc = r} placeholder="Description" />
                <input ref={r => this.location = r} placeholder="Location" />
                
                <br/>
                <button onClick={this.createListing}>Add Listing</button>
            </div>
        )
        return (
            newListing
        )
    }
}

export default AddListing;