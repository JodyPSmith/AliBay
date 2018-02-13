import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/dashboard/dashboard';
// import Signup from './components/signup/signup';
// import Login from './components/login/login';
import LoginPage from './Containers/LoginPage/LoginPage';
import Navigation from './components/Navigation/Navigation';
import SearchPage from './Containers/SearchPage/SearchPage';
import ItemPage from './Containers/ItemPage/ItemPage';
import HomePage from './Containers/homePage/HomePage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            //checks to see if user is signed in
            isSignedIn: true,
            //placeholder to simulate searching
            hasSearched: true,
            //needed to simulate url change, default is home
            route: 'home'
        };
    }

    render() {
        // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
        const { isSignedIn, hasSearched, route } = this.state;
        //ternary operator to check what route the page is one... default is home
        return route === 'home' ? (
            <div className="App ">
                <Navigation signedIn={isSignedIn} />
                <HomePage signedIn={isSignedIn} />
            </div>
        ) : route === 'itemPage' ? (
            <ItemPage />
        ) : //conditional to simulate searching -> if true display search page
        hasSearched ? (
            // <SearchPage signedIn={isSignedIn} />
            <LoginPage />
        ) : null;
    }
}

export default App;
