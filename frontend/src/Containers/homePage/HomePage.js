import React, { Component } from "react";
import logo from "../../images/Alibay.png";
import SearchBar from "../../components/searchBar/searchBar";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    const { isSignedIn, user } = this.props;
    return (
      <div
        className="center"
        style={{
          marginTop: "20vh"
        }}
      >
        <div className="flex justify-center">
          <img
            className="center"
            style={{
              width: "30vw",
              maxWidth: "400px",
              height: "auto"
            }}
            alt="logo"
            src={logo}
          />
        </div>
        <div
          style={{
            width: "30vw"
          }}
          className="mt3 center"
        >
          <SearchBar
            homepage={true}
            searchResult={this.props.searchResult}
            onChange={""}
          />
          {isSignedIn &&
            user && (
              <div className="mt3 flex justify-center">
                <Link to="/add" className="dim pointer f4 mr3 near-black link">
                  Welcome back, {user.fname}! Selling an item?
                </Link>
              </div>
            )}
        </div>
      </div>
    );
  }
}
export default HomePage;
