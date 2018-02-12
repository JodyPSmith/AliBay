import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc dib br3 pa3 ma2 dim bw2 shadow-5 pointer">
                <img
                    style={{
                        maxWidth: '10vw',
                        maxHeight: 'auto',
                        minHeight: 'auto',
                        minWidth: '10vw'
                    }}
                    src={this.props.image}
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
