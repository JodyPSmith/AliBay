import React, { Component } from 'react';
import InAppSearchBar from '../searchBar/inAppSearchBar';
import Dropdown from './Dropdown';
import './dropdown.css';

class Navigation extends Component {
    render() {
        const { isSignedIn, location } = this.props;
        const home = location.pathname === '/';
        //needed ternary operator to change css depending on route
        //otherwise the nav would appear on the wrong side
        const css = home
            ? 'flex justify-end w-100 '
            : 'flex justify-between w-100 ';
        //in the parent container, the signedIn prop is linked to the this.state.isSignedIn boolean
        //if false -> displays "Sign In" otherwise it links to the Dashboard
        return !isSignedIn ? (
            <div className={css}>
                {/* this binary operator will display nothing if the route is at the homepage, or the inAppSearch bar if it isnt */}
                {home || <InAppSearchBar />}
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
                {home || <InAppSearchBar />}
                <nav className="flex justify-end">
                    <div className="ma3 mr4 mt4 ml0">
                        <Dropdown />
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
