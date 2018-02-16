import React, { Component } from 'react';
import InAppSearchBar from '../searchBar/inAppSearchBar';
import Dropdown from './Dropdown';
import './dropdown.css';

class Navigation extends Component {
    componentDidMount() {
        fetch('/check', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.res);
                if (res.res) {
                    //this prop is called in App.js
                    this.props.setSignIn();
                }
            });
    }
    render() {
        const { isSignedIn, location, setSignIn, setSignOut } = this.props;
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
                    <div className="ma3 mr4 mt4 ml0">
                        <Dropdown
                            setSignIn={setSignIn}
                            isSignedIn={isSignedIn}
                        />
                    </div>
                </nav>
            </div>
        ) : (
            <div className={css}>
                {home || <InAppSearchBar />}
                <nav className="flex justify-end">
                    <div className="ma3 mr4 mt4 ml0">
                        <Dropdown
                            setSignOut={setSignOut}
                            isSignedIn={isSignedIn}
                        />
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
