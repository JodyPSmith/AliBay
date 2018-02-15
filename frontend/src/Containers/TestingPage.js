import React, { Component } from 'react';
import ImageUpload from '../components/Imageupload/imageupload';
class Testing extends Component {
    constructor() {
        super();
        this.state = {
            img: ''
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
            body: formData
        }).then(res => console.log(res));
    };
    render() {
        return <ImageUpload onImageDrop={this.uploadImage} />;
    }
}

export default Testing;
