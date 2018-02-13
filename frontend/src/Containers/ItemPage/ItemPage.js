import React, { Component } from 'react';
import InAppSearchBar from '../../components/searchBar/inAppSearchBar';
import Navigation from '../../components/Navigation/Navigation';
import { items } from '../../components/Card/fakeData';
import './itemPage.css';
class ItemPage extends Component {
    render() {
        // const { image } = this.props.items;
        return (
            <div>
                <div className="flex justify-between">
                    <InAppSearchBar />
                    <Navigation />
                </div>
                <div id="ItemPage">
                    <img src={items[0].image} alt="product " />
                </div>
            </div>
        );
    }
}
export default ItemPage;
