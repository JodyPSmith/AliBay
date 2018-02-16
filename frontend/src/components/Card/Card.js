import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div
                onClick={this.props.onClick}
                className="tc dib br3 pa3 ma2 dim bw2 shadow-5 pointer"
            >
                <img
                    style={{
                        maxWidth: '15vw',
                        maxHeight: 'auto',
                        minHeight: 'auto',
                        minWidth: '15vw'
                    }}
                    //the image is linked to the item prop in the parent container -> CardList
                    src={`http://localhost:4000/${this.props.item.image[0]}`}
                    alt="product"
                />
                <div>
                    <h2>{'PRICE'}</h2>
                    <p>{'TITLE'}</p>
                </div>
            </div>
        );
    }
}

export default Card;
