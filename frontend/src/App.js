import React, { Component } from 'react';
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
import userMap from './placeholderData/user';

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
            item: items[0],
            user: userMap.test
        };
    }

    setItemPage = data => {
        this.setState({
            item: data,
            route: 'itemPage'
        });
    };
    setRoute = route => {
        this.setState({ route: route });
    };
    componentDidMount() {
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName(
                    'dropdown-content'
                );
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    }
    render() {
        // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
        const { isSignedIn, hasSearched, route, item, user } = this.state;
        //ternary operator to check what route the page is on... default is home
        return route === 'home' ? (
            <HomePage
                signedIn={isSignedIn}
                route={route}
                click={this.setRoute}
            />
        ) : /* <AddListingPage />
                <Signup /> */ route ===
        'itemPage' ? (
            <ItemPage item={item} signedIn={isSignedIn} click={this.setRoute} />
        ) : route === 'confirmationPage' ? (
            <ConfirmationPage
                user={user}
                item={item}
                signedIn={isSignedIn}
                click={this.setRoute}
            />
        ) : //conditional to simulate searching -> if true display search page
        hasSearched ? (
            <SearchPage
                setItemPage={this.setItemPage}
                signedIn={isSignedIn}
                click={this.setRoute}
            />
        ) : null;
    }
}

export default App;
