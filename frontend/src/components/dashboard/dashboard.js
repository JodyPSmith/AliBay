import React, { Component } from 'react';
import CardList from '../Card/CardList.js';
import Scroll from '../../Containers/scroll';
class Dashboard extends Component {
    constructor() {
        super();
        this.state = { Sold: [], Selling: [], IBought: [] };
    }

    componentDidMount = () => {
        // this.setState({iBought : this.getList("IBought"), sold : this.getList("Sold"), selling : this.getList("Selling") })
        // this.getStateList()
        this.getList('Selling');
        this.getList('IBought');
        this.getList('Sold');
        // console.log("this is " , x)
    };

    getList = type => {
        return fetch('/items' + type, {
            credentials: 'include'
        })
            .then(x => x.json())
            .then(x => {
                var s = {};
                s[type] = x;
                console.log(s);
                this.setState(s);
            });
    };

    // getStateList = () => {
    //     this.setState({sold : this.getList("Sold"), iBought : this.getList("IBought"), selling : this.getList("Sold")})
    //     this.soldArray.push(this.state.sold);
    // }

    render() {
        return (
            <div className="ma5">
                <Scroll height="75vh">
                    <div className="ma5">
                        <div className="itemList br3 shadow-1 mv4 pa3">
                            <h2>Bought Items</h2>
                            <CardList
                                items={this.state.IBought}
                                setItemPage={this.props.setItemPage}
                            />
                        </div>
                        <div className="itemList br3 shadow-1 mv4 pa3">
                            <h2>Selling Items</h2>
                            <CardList
                                items={this.state.Selling}
                                setItemPage={this.props.setItemPage}
                            />
                        </div>
                        <div className="itemList br3 shadow-1 mv4 pa3">
                            <h2>Sold Items</h2>
                            <CardList
                                items={this.state.Sold}
                                setItemPage={this.props.setItemPage}
                            />
                        </div>
                    </div>
                </Scroll>
            </div>
        );
    }
}

export default Dashboard;
