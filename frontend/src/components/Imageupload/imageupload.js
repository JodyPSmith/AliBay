import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Imageupload extends Component {
    constructor() {
        super();
        this.state = { files: [] }
    }


    onImageDrop = (files) => {
        this.setState({ files });
        console.log(files);
    }

    render() {
        return (
            <Dropzone
                multiple={false}
                accept="image/jpg, image/png"
                onDrop={this.onImageDrop}>
                <p> Drag and drop images to upload here </p>
            </Dropzone>
        );
    }

}

export default Imageupload;