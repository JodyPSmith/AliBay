import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { items } from '../../components/Card/fakeData';
import './itemPage.css';
class ItemPage extends Component {
    render() {
        const { signedIn } = this.props;
        return (
            <div>
                <div className="flex justify-between">
                    <Navigation signedIn={signedIn} />
                </div>
                <div id="ItemPage">
                    <img src={items[0].image} alt="product " />
                </div>
            </div>
        );
    }
}
export default ItemPage;
