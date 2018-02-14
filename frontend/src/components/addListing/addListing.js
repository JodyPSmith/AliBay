import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import Imageupload from '../Imageupload/imageupload'
class AddListing extends Component {
    constructor() {
        super();
        this.state = { accepted: [], rejected: [] }
    }

    onImageDrop = (accepted, rejected) => {
        this.setState({ accepted, rejected });
        //console.log(accepted);
    }

    createListing = () => {
        var newItem = { "sellerID": 12345, "title": this.title.value, "price": this.price.value, "description": this.desc.value, "images": this.state.accepted, "location": this.location.value }
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
                <div>
                <div className="flex justify-start center flex-wrap">
                    <Imageupload onImageDrop={this.onImageDrop} />
                </div>
                <div>
                    Title: <input required ref={r => this.title = r} placeholder="Title" />
                    Price: <input required ref={r => this.price = r} placeholder="Price" type="number" min="0" step="0.01" />
                    Desc: <input required ref={r => this.desc = r} placeholder="Description" />
                    Location: <input ref={r => this.location = r} placeholder="Location" />
                </div>
            </div>
                <div className="flex justify-start center flex-wrap">
                    {this.state.accepted.map(x => console.log(x))}
                    {this.state.accepted.map(x => <img style={{
                        maxWidth: '15vh',
                        
                        minHeight: 'auto',
                        
                        margin: '2vh'
                    }} src={x.preview} />)}
                </div>
                
                <br />
                <button onClick={this.createListing}>Add Listing</button>
            </div>
        )
        return (
            newListing
        )
    }
}

export default AddListing;