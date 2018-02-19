import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CardList from "../../components/Card/CardList.js";
// import Scroll from '../../Containers/scroll';
class SellerPage extends Component {
  constructor() {
    super();
    this.state = { selling: [], sellerInfo: {} };
  }

  componentDidMount = () => {
    console.log("Seller Page props", this.props);
    this.getInventory(this.props.match.params.sellerID);
    this.getSeller(this.props.match.params.sellerID);
  };

  getInventory = sellerID => {
    console.log("SELLER ID:", sellerID);
    fetch("/itemsSelling", {
      credentials: "include",
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ sellerID: sellerID })
    })
      .then(res => res.json())
      .then(itemList => {
        this.setState({ selling: itemList });
      });
  };

  getSeller = sellerID => {
    fetch("/check", {
      credentials: "include",
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ userID: sellerID })
    })
      .then(res => res.json())
      .then(seller => {
        this.setState({ sellerInfo: seller.user });
      });
  };

  render() {
    return (
      <div>
        <div className="itemList">
          <div className="tc">
            <h2>
              {this.state.sellerInfo.fname} {this.state.sellerInfo.lname}'s
              Items
            </h2>
            <p>
              Shipping from {this.state.sellerInfo.city},{" "}
              {this.state.sellerInfo.province}, {this.state.sellerInfo.country}
            </p>
          </div>

          <CardList
            items={this.state.selling}
            setItemPage={this.props.setItemPage}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(SellerPage);
