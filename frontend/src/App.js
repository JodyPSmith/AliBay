<<<<<<< HEAD
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import Dashboard from './components/dashboard/dashboard';
import AddListingPage from './Containers/AddListingPage/AddListingPage';
import SearchPage from './Containers/SearchPage/SearchPage';
import ItemPage from './Containers/ItemPage/ItemPage';
import HomePage from './Containers/homePage/HomePage';
import ConfirmationPage from './Containers/ConfirmationPage/ConfirmationPage';
import userMap from './placeholderData/user';
import Navigation from './components/Navigation/Navigation';
// import TestingPage from './Containers/TestingPage';
=======
import React, { Component } from "react";
import { Switch, Route, withRouter, Link } from "react-router";
import Dashboard from "./components/dashboard/dashboard";
import AddListingPage from "./Containers/AddListingPage/AddListingPage";
import SearchPage from "./Containers/SearchPage/SearchPage";
import ItemPage from "./Containers/ItemPage/ItemPage";
import HomePage from "./Containers/homePage/HomePage";
import ConfirmationPage from "./Containers/ConfirmationPage/ConfirmationPage";
import { items } from "./components/Card/fakeData";
import userMap from "./placeholderData/user";
import Navigation from "./components/Navigation/Navigation";
import TestingPage from "./Containers/TestingPage";
>>>>>>> 6475cf7c9acf267b604712600a7f59e21d44b3f7

const Navigator = withRouter(Navigation);

class App extends Component {
<<<<<<< HEAD
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
            item: {},
            user: userMap.test,
            searchResult: []
        };
    }

    setSignIn = () => {
        this.setState({ isSignedIn: true });
=======
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
      user: userMap.test,
      userInfo: [],
      searchResult: []
>>>>>>> 6475cf7c9acf267b604712600a7f59e21d44b3f7
    };
  }

  componentDidMount = () => {
    fetch("/check", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(user => {
        console.log("json: ", user);
        this.setState({ userInfo: user });
      });
  };

  setSignIn = () => {
    this.setState({ isSignedIn: true });
  };

  setSignOut = () => {
    fetch("/signOut", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(json => {
        if (json.res)
          this.setState({
            isSignedIn: false
          });
      });
    this.props.history.push("/");
    window.location.reload();
  };

  setItemPage = data => {
    this.setState({
      item: data
    });
  };
  // setRoute = route => {
  //     this.setState({ route: route });
  // };

<<<<<<< HEAD
    // function to write search result at top level so it can be passed among child components
    searchResult = data => {
        this.setState({ searchResult: data });
        console.log('these are the items in app ', data);
    };
=======
  // function to write search result at top level so it can be passed among child components
  searchResult = data => {
    this.setState({ searchResult: data });
  };
>>>>>>> 6475cf7c9acf267b604712600a7f59e21d44b3f7

  render() {
    // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
    const { isSignedIn, item, user, userInfo } = this.state;
    console.log(window.location.pathname);
    //ternary operator to check what route the page is on... default is home
    return (
      <div>
        <Navigator
          setSignOut={this.setSignOut}
          setSignIn={this.setSignIn}
          isSignedIn={isSignedIn}
          searchResult={this.searchResult}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => {
              return (
                <HomePage
                  searchResult={this.searchResult}
                  isSignedIn={isSignedIn}
                />
<<<<<<< HEAD
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={routeProps => {
                            return (
                                <HomePage
                                    searchResult={this.searchResult}
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
                            <SearchPage
                                searchResult={this.state.searchResult}
                                setItemPage={this.setItemPage}
                            />
                        )}
                    />
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
                </Switch>
            </div>
        );
    }
=======
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
            render={() => <ConfirmationPage user={userInfo.user} item={item} />}
          />
          <Route
            exact
            path="/add"
            render={() => <AddListingPage item={item} />}
          />
          <Route
            exact
            path="/search:searchTerm"
            render={routeProps => (
              <SearchPage
                searchResult={this.state.searchResult}
                setItemPage={this.setItemPage}
              />
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
          {/* <Route path="/testing" render={() => <TestingPage />} /> */}
        </Switch>
      </div>
    );
  }
>>>>>>> 6475cf7c9acf267b604712600a7f59e21d44b3f7
}

export default App;
