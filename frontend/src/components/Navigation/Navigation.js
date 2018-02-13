import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        //in the parent container, the signedIn prop is linked to the this.state.isSignedIn boolean
        //if false -> displays "Sign In" otherwise it links to the Dashboard
        return !this.props.signedIn ? (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={''} className="f5 link dim black  pa3 pointer  mr3">
                    Sign In
                </p>
            </nav>
        ) : (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={''} className="f5 link dim black  pa3 pointer  mr3">
                    Dashboard
                </p>
            </nav>
        );
    }
}

export default Navigation;
