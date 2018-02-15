import React, { Component } from 'react';
//import Dropzone from 'react-dropzone';
//import Imageupload from '../Imageupload/imageupload';
class AddListing extends Component {
    constructor() {
        super();
        this.state = { accepted: [], rejected: [] };
    }

    onImageDrop = (accepted, rejected) => {
        this.setState({ accepted, rejected });

        //console.log(accepted);
    };

    uploadFile = x => {
        console.log('this is what x is ' + x);
        fetch('/raw', {
            method: 'POST',
            enctype: 'multipart/form-data',
            body: x
        }); //
    };

    createListing = () => {
        //var newItem = { "sellerID": 12345, "title": this.title.value, "price": this.price.value, "description": this.desc.value, "images": this.state.accepted, "location": this.location.value }
        var newItem = { images: this.state.accepted[0] };
        var extract = newItem.images;
        var blobby = extract.preview;
        console.log(blobby);
        // need to add redirect to for sale items in the below fetch once the end point is ready
        fetch('/createListing', {
            method: 'POST',
            enctype: 'multipart/form-data',
            body: JSON.stringify(blobby),
            credentials: 'include'
        })
            .then(x => x.text())
            .then(y => console.log(y));
    };

    render() {
        var newListing = (
            <div>
                <div className="flex justify-center center flex-wrap">
                    {/* <div>
                        <Imageupload onImageDrop={this.onImageDrop} />
                    </div> */}
                    <div>
                        {/* <input type="file" id="input" onClick={e => this.uploadFile(e.target.files[0])} /><br/> */}
                        {/* Image <input type="file" ref={r => this.image = r} id="input" onChange={e => this.uploadFile(e.target.files[0])} /> */}
                        <a className="f3 pa2 ma1 mw-20">
                            Title :<input
                                className="pa2 ma1"
                                required
                                ref={r => (this.title = r)}
                                placeholder="Title"
                            />
                        </a>
                        <br />
                        <a className="f3 pa2 ma1 mw-20">
                            Price :<input
                                className="pa2 ma1"
                                required
                                ref={r => (this.price = r)}
                                placeholder="Price"
                                type="number"
                                min="0"
                            />
                        </a>
                        <br />
                        <a className="f3 pa2 ma1 mw-20">
                            Desc :<textarea
                                row="4"
                                cols="50"
                                className="pa2 ma1"
                                required
                                ref={r => (this.desc = r)}
                                placeholder="Description"
                            />
                        </a>
                        <br />
                        <a className="f3 pa2 ma1 mw-20">
                            Location :<input
                                className="pa2 ma1"
                                ref={r => (this.location = r)}
                                placeholder="Location"
                            />
                        </a>
                        <br />
                    </div>
                </div>
                <div className="flex justify-center center flex-wrap">
                    {this.state.accepted.map(x => console.log(x))}
                    {this.state.accepted.map(x => (
                        <img
                            style={{
                                maxWidth: '15vh',

                                minHeight: 'auto',

                                margin: '2vh'
                            }}
                            src={x.preview}
                        />
                    ))}
                </div>

                <br />
                <button onClick={this.uploadFile}>Add Listing</button>
            </div>
        );
        return newListing;
    }
}

export default AddListing;
