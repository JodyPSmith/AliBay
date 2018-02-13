import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Imageupload extends Component {

    render() {
        return (
            <Dropzone
                multiple={true}
                accept="image/jpeg, image/png"
                onDrop={this.props.onImageDrop}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
            <p>Only *.jpeg and *.png images will be accepted</p>
            </Dropzone>
        );
    }

}

export default Imageupload;