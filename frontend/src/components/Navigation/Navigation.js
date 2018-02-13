import React, { Component } from 'react';
import InAppSearchBar from '../searchBar/inAppSearchBar';

class Navigation extends Component {
    render() {
        //needed ternary operator to change css depending on route
        //otherwise the nav would appear on the wrong side
        const css =
            this.props.route === 'home'
                ? 'flex justify-end w-100 '
                : 'flex justify-between w-100 ';
        //in the parent container, the signedIn prop is linked to the this.state.isSignedIn boolean
        //if false -> displays "Sign In" otherwise it links to the Dashboard
        return !this.props.signedIn ? (
            <div className={css}>
                {/* this binary operator will display nothing if the route is at the homepage, or the inAppSearch bar if it isnt */}
                {this.props.route === 'home' || <InAppSearchBar />}
                <nav className="flex justify-end">
                    <p
                        onClick={''}
                        className="f5 link dim black  pa3 pointer  mr3"
                    >
                        Sign In
                    </p>
                </nav>
            </div>
        ) : (
            <div className={css}>
                {this.props.route === 'home' || <InAppSearchBar />}
                <nav className="flex justify-end">
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
