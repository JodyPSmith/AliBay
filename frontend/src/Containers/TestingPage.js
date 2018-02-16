import React, { Component } from 'react';
import ImageUpload from '../components/Imageupload/imageupload';
class Testing extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        fetch('/getImage', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(images => this.setState({ images }));
    }
    render() {
        return (
            <div>
                {this.state.images.map((image, i) => {
                    console.log(image);
                    return (
                        <img
                            alt="product"
                            src={`http://localhost:4000/${
                                this.state.images[i]
                            }`}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Testing;
