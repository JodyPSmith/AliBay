import React, { Component } from 'react';

class Testing extends Component {
    constructor() {
        super();
        this.state = {
            img: ''
        };
    }
    componentDidMount() {
        const reader = new FileReader();
        let file;
        fetch('/imgTest')
            .then(res => res.json())
            .then(res => console.log(res.img.data));
        // let img = reader.readAsBinaryString(file);
        // this.setState({ img });
    }
    render() {
        return (
            <div>
                <img src={this.state.img} alt="test" />
            </div>
        );
    }
}

export default Testing;
