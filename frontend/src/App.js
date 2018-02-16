import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import Dashboard from './components/dashboard/dashboard';
import AddListingPage from './Containers/AddListingPage/AddListingPage';
import SearchPage from './Containers/SearchPage/SearchPage';
import ItemPage from './Containers/ItemPage/ItemPage';
import HomePage from './Containers/homePage/HomePage';
import ConfirmationPage from './Containers/ConfirmationPage/ConfirmationPage';
import { items } from './components/Card/fakeData';
import userMap from './placeholderData/user';
import Navigation from './components/Navigation/Navigation';
import TestingPage from './Containers/TestingPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            //needed to check if user is signed in
            isSignedIn: false,
            //placeholder to simulate searching
            hasSearched: true,
            //needed to simulate url change, default is home
            home: true,
            //needed to pass in data from specific item page
            item: items[0],
            user: userMap.test
        };
    }

    setSignIn = () => {
        this.setState({ isSignedIn: true });
    };

    setItemPage = data => {
        this.setState({
            item: data
        });
    };
    // setRoute = route => {
    //     this.setState({ route: route });
    // };

    render() {
        // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
        const { isSignedIn, item, user } = this.state;
        const Navigator = withRouter(Navigation);
        console.log(window.location.pathname);
        //ternary operator to check what route the page is on... default is home
        return (
            <div>
                <Navigator setSignIn={this.setSignIn} isSignedIn={isSignedIn} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={routeProps => {
                            return (
                                <HomePage
                                    setSignIn={this.setSignIn}
                                    isSignedIn={isSignedIn}
                                />
                            );
                        }}
                    />
                    <Route
                        exact
                        path="/item:itemID"
                        render={() => <ItemPage item={item} />}
                    />
                    <Route
                        exact
                        path="/confirm"
                        render={() => (
                            <ConfirmationPage user={user} item={item} />
                        )}
                    />
                    <Route
                        exact
                        path="/add"
                        render={() => <AddListingPage item={item} />}
                    />
                    <Route
                        exact
                        path="/search"
                        render={routeProps => (
                            <SearchPage setItemPage={this.setItemPage} />
                        )}
                    />
                    <Route path="/testing" render={() => <TestingPage />} />
                    <Route
                        exact
                        path="/dashboard"
                        render={() => (
                            <Dashboard
                                item={item}
                                user={user}
                                setItemPage={this.setItemPage}
                            />
                        )}
                    />
                    <Route path="/testing" render={() => <TestingPage />} />
                </Switch>
            </div>
        );
    }
}

export default App;
