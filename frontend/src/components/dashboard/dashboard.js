import React, { Component } from "react";
import Card from "../Card/Card.js"

let dashboard =
    (<div className="Dashboard">
        <div className="itemList"> 
        Bought Items
        <Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
        <div className="itemList">
        Selling Items
        <Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
        <div className="itemList"> 
        Sold Items
        <Card/><Card/><Card/>
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