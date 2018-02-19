import React, { Component } from "react";
import CardList from "../Card/CardList.js";
// import Scroll from '../../Containers/scroll';
class Dashboard extends Component {
  constructor() {
    super();
    this.state = { Sold: [], Selling: [], IBought: [] };
  }

  componentDidMount = () => {
    // this.getStateList();
    this.getList("Selling");
    this.getList("IBought");
    this.getList("Sold");
    // console.log("this is " , x)
  };

  getList = type => {
    console.log(`type: `, type);
    return fetch("/items" + type, {
      credentials: "include",
      header: { "content-type": "application/json" },
      method: "POST",
      body: {}
    })
      .then(x => x.json())
      .then(x => {
        console.log(`getlist ${type}`, x);
        var s = {};
        s[type] = x;
        console.log(s);
        this.setState(s);
      });
  };

  // getStateList = () => {
  //   this.setState({
  //     sold: this.getList("Sold"),
  //     iBought: this.getList("IBought"),
  //     selling: this.getList("Sold")
  //   });
  //   this.soldArray.push(this.state.sold);
  // };

  render() {
    return (
      <div>
        <div className="itemList">
          <h2>Selling Items</h2>
          <CardList
            items={this.state.Selling}
            setItemPage={this.props.setItemPage}
          />
        </div>

        <div className="itemList">
          <h2>Bought Items</h2>
          <CardList
            items={this.state.IBought}
            setItemPage={this.props.setItemPage}
          />
        </div>

        <div className="itemList">
          <h2>Sold Items</h2>
          <CardList
            items={this.state.Sold}
            setItemPage={this.props.setItemPage}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
