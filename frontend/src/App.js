import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/dashboard/dashboard';
// import Signup from './components/signup/signup';
// import Login from './components/login/login';
import LoginPage from './Containers/LoginPage/LoginPage'
import AddListingPage from './Containers/AddListingPage/AddListingPage'
import Navigation from './components/Navigation/Navigation';
import SearchPage from './Containers/SearchPage/SearchPage';
import ItemPage from './Containers/ItemPage/ItemPage';
import HomePage from './Containers/homePage/HomePage';
class App extends Component {
    constructor() {
        super();
        this.state = {
            isSignedIn: true,
            hasSearched: true,
            route: ''
        };
    }

    render() {
        const { isSignedIn, hasSearched, route } = this.state;
        return route === 'home' ? (
            <div className="App ">
                <Navigation signedIn={isSignedIn} />
                <HomePage signedIn={isSignedIn} />
            </div>
        ) : route === 'itemPage' ? (
            <ItemPage />
        ) : hasSearched ? (
            // <SearchPage signedIn={isSignedIn} />
            <AddListingPage/>
        ) : null;
    }
}

export default App;
