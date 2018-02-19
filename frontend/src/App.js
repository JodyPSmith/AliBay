import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router";
import Dashboard from "./components/dashboard/dashboard";
import AddListingPage from "./Containers/AddListingPage/AddListingPage";
import SearchPage from "./Containers/SearchPage/SearchPage";
import ItemPage from "./Containers/ItemPage/ItemPage";
import HomePage from "./Containers/homePage/HomePage";
import ConfirmationPage from "./Containers/ConfirmationPage/ConfirmationPage";
import SellerPage from "./Containers/SellerPage/SellerPage";
import userMap from "./placeholderData/user";
import Navigation from "./components/Navigation/Navigation";
import TestingPage from "./Containers/TestingPage";

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
      item: [],
      userInfo: {},
      searchResult: []
    };
  }

  componentDidMount = () => {
    this.checkUser();
  };

  checkUser = userID => {
    fetch("/check", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({ userID })
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

  // function to write search result at top level so it can be passed among child components
  searchResult = data => {
    this.setState({ searchResult: data });
  };

  render() {
    // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
    const { isSignedIn, item, user, userInfo, searchResult } = this.state;
    console.log(window.location.pathname);
    //ternary operator to check what route the page is on... default is home
    return (
      <div>
        <Navigation
          checkUser={this.checkUser}
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
              );
            }}
          />
          <Route
            exact
            path="/item:itemID"
            render={() => <ItemPage item={item} user={userInfo.user} />}
          />
          <Route
            exact
            path="/seller:sellerID"
            render={() => (
              <SellerPage
                item={item}
                user={userInfo.user}
                setItemPage={this.setItemPage}
              />
            )}
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
                searchResult={searchResult}
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
                user={userInfo.user}
                setItemPage={this.setItemPage}
              />
            )}
          />
          {/* <Route path="/testing" render={() => <TestingPage />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
