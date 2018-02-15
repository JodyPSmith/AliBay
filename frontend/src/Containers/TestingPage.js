import React, { Component } from 'react';
import ImageUpload from '../components/Imageupload/imageupload';
class Testing extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }
    uploadImage = accepted => {
        console.log(accepted);
        const formData = new FormData();
        accepted.forEach((file, i) => {
            console.log(file);
            formData.append(`userpic[]`, file, file.name);
        });
        console.log(formData);
        fetch('/imgTest', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: formData
        })
            .then(res => res.json())
            .then(res => this.setState({ images: res.res }));
    };
    componentDidMount() {}
    render() {
        return (
            <div>
                <ImageUpload onImageDrop={this.uploadImage} />

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
