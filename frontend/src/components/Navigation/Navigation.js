import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={''} className="f4 link dim black  pa3 pointer  mr3">
                    Sign In
                </p>
            </nav>
        );
    }
}

export default Navigation;
