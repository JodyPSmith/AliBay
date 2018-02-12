import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc dib br3 pa3 ma2 dim bw2 shadow-5">
                <img
                    style={{
                        maxWidth: '5vw',
                        maxHeight: 'auto'
                    }}
                    src={
                        'http://www.gadgetreview.com/wp-content/uploads/2016/01/Epson-Home-Cinema-2040-1.jpg'
                    }
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
