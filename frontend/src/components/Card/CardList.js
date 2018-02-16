import React, { Component } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

class CardList extends Component {
    render() {
        const { items, setItemPage } = this.props;
        return (
            <div
                className="flex justify-start center flex-wrap"
                style={{
                    minWidth: '10vw',
                    minHeight: 'auto',
                    marginLeft: '1vw'
                }}
            >
                {items.map((item, index) => {
                    //use map array method to iterate through each index of the items map
                    //items will be fetched through the server, now it is fetched from a fakeData object. See line 3
                    return (
                        <Link
                            className="hover-orange visited"
                            to={`/item:${item.listing_id}`}
                        >
                            <Card
                                onClick={() => {
                                    setItemPage(item);
                                }}
                                key={index}
                                item={item}
                            />
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default CardList;
