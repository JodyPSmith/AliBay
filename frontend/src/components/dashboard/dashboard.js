import React, { Component } from "react";
import { items } from '../../components/Card/fakeData';
import CardList from "../Card/CardList.js"

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {Sold : [], Selling : [], IBought :[]}
    }

    componentDidMount = () => {
        // this.setState({iBought : this.getList("IBought"), sold : this.getList("Sold"), selling : this.getList("Selling") })
        // this.getStateList()
        this.getList("Selling")
        this.getList("IBought")
        this.getList("Sold")
        // console.log("this is " , x)
        
    }

    getList =  (type) => {
        return fetch('/items' + type, {
            credentials: 'include'
        })
        .then(x => x.json())
        .then(x => {
            var s ={};
            s[type] = x;
            console.log(s)
            this.setState(s)
        })
    }

    // getStateList = () => {
    //     this.setState({sold : this.getList("Sold"), iBought : this.getList("IBought"), selling : this.getList("Sold")})
    //     this.soldArray.push(this.state.sold);
    // }

    render() {
        return (
            <div>
                <div className="itemList">
                    <h2>Bought Items</h2>
                    <CardList items={this.state.IBought} setItemPage={this.props.setItemPage} />
                </div>
                <div className="itemList">
                    <h2>Selling Items</h2>
                    <CardList items={this.state.Selling} setItemPage={this.props.setItemPage} />
                </div>
                <div className="itemList">
                    <h2>Sold Items</h2>
                    <CardList items={this.state.Sold} setItemPage={this.props.setItemPage} />
                </div>
            </div>
        );
    }

}

export default Dashboard;