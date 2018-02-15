import React, { Component } from "react";
import { items } from '../../components/Card/fakeData';
import CardList from "../Card/CardList.js"

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="itemList">
                    Bought Items
                        <CardList items={items} setItemPage={this.props.setItemPage} />
                </div>
                <div className="itemList">
                    Selling Items
                        <CardList items={items} setItemPage={this.props.setItemPage} />
                </div>
                <div className="itemList">
                    Sold Items
                        <CardList items={items} setItemPage={this.props.setItemPage} />
                </div>
            </div>
        );
    }

}

export default Dashboard;