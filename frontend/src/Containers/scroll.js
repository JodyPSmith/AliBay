import React, { Component } from 'react';

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
