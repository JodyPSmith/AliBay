import React, { Component } from 'react';
import Imageupload from '../Imageupload/imageupload';
class AddListing extends Component {
    constructor() {
        super();
        this.state = {
            accepted: [],
            images: []
        };
    }

    onImageDrop = accepted => {
        console.log(accepted);
        const formData = new FormData();
        accepted.forEach((file, i) => {
            console.log(file);
            formData.append(`userpic[]`, file, file.name);
        });
        console.log(formData);
        fetch('/imgUpload', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => this.setState({ images: res.images }));
    };

    createListing = () => {
        var newItem = {
            title: this.title.value,
            price: this.price.value,
            description: this.desc.value,
            images: this.state.images,
            location: this.location.value
        };

        fetch('/createListing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem),
            credentials: 'include'
        })
            .then(x => x.json())
            .then(y => console.log(y));
    };

    render() {
        var newListing = (
            <div>
                <div className="flex justify-center center flex-wrap">
                    <div>
                        <Imageupload onImageDrop={this.onImageDrop} />
                    </div>
                    <div>
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
                    {this.state.images.map(image => {
                        console.log(image);
                        return (
                            <img
                                style={{
                                    maxWidth: '15vh',

                                    minHeight: 'auto',

                                    margin: '2vh'
                                }}
                                src={`http://localhost:4000/${image}`}
                            />
                        );
                    })}
                </div>

                <br />
                <button onClick={this.createListing}>Add Listing</button>
            </div>
        );
        return newListing;
    }
}

export default AddListing;
