import React, { Component } from 'react';
import Card from './Card';
import { items } from './fakeData';

class CardList extends Component {
    render() {
        // const { items } = this.props;
        return (
            <div
                className="flex justify-center flex-wrap"
                style={{
                    minWidth: '10vw',
                    minHeight: 'auto'
                }}
            >
                {items.map((item, index) => {
                    //use map array method to iterate through each index of the items map
                    //items will be fetched through the server, now it is fetched from a fakeData object. See line 3
                    return <Card item={items[index]} />;
                })}
            </div>
        );
    }
}

export default CardList;
