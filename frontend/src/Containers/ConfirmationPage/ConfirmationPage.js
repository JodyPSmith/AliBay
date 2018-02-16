import React, { Component } from 'react';

class ConfirmationPage extends Component {
    constructor() {
        super();
        this.state = {
            confirmed: true
        };
    }

    confirmBuying = () => {
        fetch('/buy', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({
                //this prop is passed from the root App.js in the this.state.item
                listingID: this.props.item.listing_ID
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.res) this.setState({ confirmed: true });
            });
    };
    render() {
        const { item, user } = this.props;

        return (
            <div
                id="ItemPage flex content-center"
                style={{
                    height: '60vh'
                }}
            >
                {!this.state.confirmed ? (
                    <div className="flex flex-column items-center mt5">
                        <div
                            className="flex shadow-1"
                            style={{
                                width: '45vw'
                            }}
                        >
                            <img
                                alt="product"
                                className="w-40 h-auto"
                                src={item.image[0]}
                            />
                            <div>
                                <p className="f2 ma3 mt4 b">{item.price}</p>
                                <p className="f3 ma3">{item.name}</p>
                            </div>
                        </div>
                        <div
                            className="shadow-1 mt3"
                            style={{
                                width: '45vw'
                            }}
                        >
                            <div className="ma4">
                                {' '}
                                <p className="f2 b">
                                    {user.first_name} {user.last_name}
                                </p>
                                <div className="flex justify-between">
                                    <div>
                                        {' '}
                                        <p className="f3 ma0">
                                            {user.address} {user.city}{' '}
                                            {user.province}
                                            {` `}
                                            {user.postal_code}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex shadow-1 mt3 justify-between"
                            style={{
                                width: '45vw'
                            }}
                        >
                            <div>
                                <h1 className="ml4">Confirm to buy</h1>
                            </div>

                            <div>
                                {' '}
                                <button
                                    onClick={this.confirmBuying}
                                    style={{
                                        border: 'none',
                                        height: '4vh',
                                        minHeight: '35px',
                                        marginTop: '25%',
                                        background: '#F79521'
                                    }}
                                    className="mr4 white shadow-5 br2 pointer dim"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="ma5 shadow-1 pa5 w-50 center flex self-center mv7">
                        <p className="f3 center">
                            Order Confirmed! Please check your email for
                            shipping information.
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default ConfirmationPage;
