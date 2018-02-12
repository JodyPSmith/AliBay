import React, { Component } from 'react';
import Card from './Card';
import { items } from './fakeData';

class CardList extends Component {
    render() {
        // const { items } = this.props;
        return (
            <div
                style={{
                    minWidth: '10vw',
                    minHeight: 'auto'
                }}
            >
                {items.map((item, index) => {
                    return (
                        <Card
                            key={items[index].id}
                            name={items[index].name}
                            price={items[index].price}
                            image={items[index].image}
                        />
                    );
                })}
            </div>
        );
    }
}

export default CardList;
