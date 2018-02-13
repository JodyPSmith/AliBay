import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/dashboard/dashboard';
import Signup from './components/signup/signup';
import Login from './components/login/login';
// import LoginPage from './Containers/LoginPage/LoginPage';
import AddListingPage from './Containers/AddListingPage/AddListingPage';
import SearchPage from './Containers/SearchPage/SearchPage';
import ItemPage from './Containers/ItemPage/ItemPage';
import HomePage from './Containers/homePage/HomePage';
import ConfirmationPage from './Containers/ConfirmationPage/ConfirmationPage';
import { items } from './components/Card/fakeData';
class App extends Component {
    constructor() {
        super();
        this.state = {
            //needed to check if user is signed in
            isSignedIn: true,
            //placeholder to simulate searching
            hasSearched: true,
            //needed to simulate url change, default is home
            route: 'home',
            //needed to pass in data from specific item page
            item: items[0]
        };
    }

    setItemPage = data => {
        //TODO: this function is undefined, Use this.props.children to find payload from CardList!
        this.setState({
            item: data,
            route: 'itemPage'
        });
    };

    render() {
        // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
        const { isSignedIn, hasSearched, route, item } = this.state;
        //ternary operator to check what route the page is on... default is home
        return route === 'home' ? (
            <div className="App ">
                {<HomePage signedIn={isSignedIn} route={route} />}
                <AddListingPage />
                <Login/>
                <Signup />
            </div>
        ) : route === 'itemPage' ? (
            <ItemPage item={item} signedIn={isSignedIn} />
        ) : route === 'confirmationPage' ? (
            <ConfirmationPage item={item} signedIn={isSignedIn} />
        ) : //conditional to simulate searching -> if true display search page
        hasSearched ? (
            <SearchPage signedIn={isSignedIn} />
        ) : null;
    }
}

export default App;
