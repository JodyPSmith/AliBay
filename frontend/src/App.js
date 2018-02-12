import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
// import Dashboard from './components/dashboard/dashboard';
// import Signup from './components/signup/signup';
import logo from './images/Alibay.png';
import Login from './components/login/login';
import Navigation from './components/Navigation/Navigation';
import SearchPage from './Containers/SearchPage/SearchPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isSignedIn: true,
            hasSearched: true,
            route: 'itemPage'
        };
    }

    render() {
        const { isSignedIn, hasSearched, route } = this.state;
        return !hasSearched ? (
            <div className="App ">
                <Navigation signedIn={isSignedIn} />
                <div
                    style={{
                        marginTop: '20vh'
                    }}
                >
                    <div className="">
                        <img alt="logo" src={logo} />
                    </div>{' '}
                    <div className="mt3">
                        <SearchBar onChange={''} />
                        {isSignedIn ? (
                            <p className="dim pointer f4">Selling an item?</p>
                        ) : null}
                    </div>
                    <Login />
                </div>
            </div>
        ) : (
            <SearchPage signedIn={isSignedIn} />
        );
    }
}

export default App;
