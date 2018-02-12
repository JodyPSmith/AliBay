import React, { Component } from "react";

let dashboard =
    (<div className="Dashboard">
        <div className="itemList"> 
        Bought Items
        </div>
        <div className="itemList">
        Selling Items
        </div>
        <div className="itemList"> 
        Sold Items
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