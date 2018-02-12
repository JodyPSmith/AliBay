import React, { Component } from "react";
import Card from "../Card/Card.js"

let dashboard =
    (<div className="Dashboard">
        <div className="itemList"> 
        Bought Items
        <Card/>
        </div>
        <div className="itemList">
        Selling Items
        <Card/>
        </div>
        <div className="itemList"> 
        Sold Items
        <Card/>
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