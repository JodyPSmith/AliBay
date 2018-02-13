import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/dashboard/dashboard';
// import Signup from './components/signup/signup';
// import Login from './components/login/login';
// import LoginPage from './Containers/LoginPage/LoginPage';
// import AddListingPage from './Containers/AddListingPage/AddListingPage';
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
            route: '',
            //need to pass in data from specific item page
            item: {}
        };
    }

    renderItemPage = data => {
        //TODO: this function is undefined, find out how to get payload from CardList component to App.js
        this.setState({ item: this.props.item });
    };

    render() {
        // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
        const { isSignedIn, hasSearched, route, item } = this.state;
        //ternary operator to check what route the page is on... default is home
        return route === 'home' ? (
            <div className="App ">
                <HomePage route={route} signedIn={isSignedIn} />
            </div>
        ) : route === 'itemPage' ? (
            <ItemPage item={item} route={route} signedIn={isSignedIn} />
        ) : //conditional to simulate searching -> if true display search page
        hasSearched ? (
            <div>
                {' '}
                <SearchPage
                    renderItemPage={this.renderItemPage}
                    route={route}
                    signedIn={isSignedIn}
                />
                {/* <AddListingPage /> */}
            </div>
        ) : null;
    }
}

export default App;
