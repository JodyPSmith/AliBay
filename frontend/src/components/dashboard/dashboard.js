import React, { Component } from "react";
import Card from "../Card/Card.js"

let dashboard =
    (<div className="Dashboard">
        <div className="itemList"> 
        Bought Items
        <Card onClick={() => { setItemPage(item);}} key={this.props.index} item={this.props.item}/>
        </div>
        <div className="itemList">
        Selling Items
        <Card onClick={() => { setItemPage(item);}} key={this.props.index} item={this.props.item}/>
        </div>
        <div className="itemList"> 
        Sold Items
        <Card  onClick={() => { setItemPage(item);}} key={this.props.index} item={this.props.item}/>
        </div>
    </div>);



class Dashboard extends Component {
    render() {
        return (
            dashboard
        );
    }

}

export default Dashboard;