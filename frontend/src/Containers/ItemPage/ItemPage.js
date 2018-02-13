import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './itemPage.css';
class ItemPage extends Component {
    render() {
        const { signedIn, item } = this.props;
        return (
            <div>
                <div className="flex justify-between ">
                    <Navigation signedIn={signedIn} />
                </div>
                <div id="ItemPage">
                    <img src={item.image} alt="product " />
                </div>
            </div>
        );
    }
}
export default ItemPage;
