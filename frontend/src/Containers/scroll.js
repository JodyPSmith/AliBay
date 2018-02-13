import React, { Component } from 'react';

//this component wraps aound and contains any componet
//it facilitates scrolling without having to call it in every single component that would need it

class Scroll extends Component {
    render() {
        const { children } = this.props;
        return (
            <div
                id="scroll"
                style={{
                    overflowY: 'scroll',
                    border: 'none',
                    height: '75vh'
                }}
            >
                {' '}
                {children}
            </div>
        );
    }
}

export default Scroll;
