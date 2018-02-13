import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc dib br3 pa3 ma2 dim bw2 shadow-5 pointer">
                <img
                    style={{
                        maxWidth: '15vw',
                        maxHeight: 'auto',
                        minHeight: 'auto',
                        minWidth: '15vw'
                    }}
                    //the image is linked to the item prop in the parent container -> CardList
                    src={this.props.item.image}
                    alt="product"
                />
                <div>
                    <h2>{'PRICE'}</h2>
                    <p>{'SELLER'}</p>
                </div>
            </div>
        );
    }
}

export default Card;
