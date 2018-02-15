import React, { Component } from 'react';
// import Dashboard from './components/dashboard/dashboard';

import AddListingPage from './Containers/AddListingPage/AddListingPage';
import SearchPage from './Containers/SearchPage/SearchPage';
import ItemPage from './Containers/ItemPage/ItemPage';
import HomePage from './Containers/homePage/HomePage';
import ConfirmationPage from './Containers/ConfirmationPage/ConfirmationPage';
import { items } from './components/Card/fakeData';
import userMap from './placeholderData/user';
import { Switch, Route } from 'react-router';

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
            item: data
        });
    };
    setRoute = route => {
        this.setState({ route: route });
    };

    render() {
        // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
        const { isSignedIn, hasSearched, route, item, user } = this.state;
        //ternary operator to check what route the page is on... default is home
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={routeProps => {
                        return (
                            <HomePage
                                signedIn={isSignedIn}
                                route={route}
                                setRoute={this.setRoute}
                            />
                        );
                    }}
                />
                <Route
                    exact
                    path="/item:itemID"
                    render={() => (
                        <ItemPage
                            item={item}
                            signedIn={isSignedIn}
                            setRoute={this.setRoute}
                        />
                    )}
                />
                <Route
                    exact
                    path="/confirm"
                    render={() => (
                        <ConfirmationPage
                            user={user}
                            item={item}
                            signedIn={isSignedIn}
                            setRoute={this.setRoute}
                        />
                    )}
                />
                <Route
                    exact
                    path="/add"
                    render={() => (
                        <AddListingPage
                            item={item}
                            signedIn={isSignedIn}
                            setRoute={this.setRoute}
                        />
                    )}
                />
                <Route
                    exact
                    path="/search"
                    render={routeProps => (
                        <SearchPage
                            setItemPage={this.setItemPage}
                            signedIn={isSignedIn}
                            setRoute={this.setRoute}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default App;

// route === 'home' ? (
//     <HomePage
//         signedIn={isSignedIn}
//         route={route}
//         setRoute={this.setRoute}
//     />
// ) : route === 'itemPage' ? (
//     <ItemPage
//         item={item}
//         signedIn={isSignedIn}
//         setRoute={this.setRoute}
//     />
// ) : route === 'confirmationPage' ? (
//     <ConfirmationPage
//         user={user}
//         item={item}
//         signedIn={isSignedIn}
//         setRoute={this.setRoute}
//     />
// ) : route === 'SignupPage' ? (
//     <SignupPage setRoute={this.setRoute} />
// ) : route === 'LoginPage' ? (
//     <div>
//         <LoginPage className="white" setRoute={this.setRoute} />
//     </div>
// ) : route === 'AddListingPage' ? (
//     <AddListingPage signedIn={isSignedIn} setRoute={this.setRoute} />
// ) : //conditional to simulate searching -> if true display search page
// hasSearched ? (
//     <SearchPage
//         setItemPage={this.setItemPage}
//         signedIn={isSignedIn}
//         setRoute={this.setRoute}
//     />
// ) : null;
