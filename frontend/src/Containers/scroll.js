import React, { Component } from 'react';

//this component wraps aound and contains any componet
//it facilitates scrolling without having to call it in every single component that would need it

class Scroll extends Component {
    render() {
        const { children, height } = this.props;
        return (
            <div
                className="shadow-5"
                id="scroll"
                style={{
                    overflowY: 'scroll',
                    border: 'none',
                    height: height
                }}
            >
                {children}
            </div>
        );
    }
}

export default Scroll;
