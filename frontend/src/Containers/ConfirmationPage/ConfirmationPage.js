import React, { Component } from 'react';
import Scroll from '../../Containers/scroll';
import { Redirect, Switch } from 'react-router';
class ConfirmationPage extends Component {
    constructor() {
        super();
        this.state = {
            confirmed: false
        };
    }

    confirmBuying = () => {
        fetch('/buy', {
            credentials: 'include',
            headers: {'content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({listingID: this.props.item.listing_id})
        })
            .then(res => res.json())
            .then(json => {
                if (json.res) this.setState({ confirmed: true });
            });
    };
    render() {
        const { item, user } = this.props;

        return (
            <div id="ItemPage">
                <Scroll shadow="">
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
                        <div className="mt5 shadow-1">
                            <h1>Thanks for buying!</h1>
                        </div>
                    )}
                </Scroll>
            </div>
        );
    }
}

export default ConfirmationPage;
