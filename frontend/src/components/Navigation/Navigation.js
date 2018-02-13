import React, { Component } from 'react';
import InAppSearchBar from '../searchBar/inAppSearchBar';

class Navigation extends Component {
    render() {
        //in the parent container, the signedIn prop is linked to the this.state.isSignedIn boolean
        //if false -> displays "Sign In" otherwise it links to the Dashboard
        return !this.props.signedIn ? (
            <div className="flex justify-between w-100 ">
                {/* this binary operator will display nothing if the route is at the homepage, or the inAppSearch bar if it isnt */}
                {this.props.route === 'home' || <InAppSearchBar />}
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p
                        onClick={''}
                        className="f5 link dim black  pa3 pointer  mr3"
                    >
                        Sign In
                    </p>
                </nav>
            </div>
        ) : (
            <div className="flex justify-between w-100 ">
                {this.props.route === 'home' || <InAppSearchBar />}
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p
                        onClick={''}
                        className="f5 link dim black  pa3 pointer  mr3"
                    >
                        Dashboard
                    </p>
                </nav>
            </div>
        );
    }
}

export default Navigation;
