import React, { Component } from 'react';
import logo from '../../images/Alibay.png';
import SearchBar from '../../components/searchBar/searchBar';
import Navigation from '../../components/Navigation/Navigation';

class HomePage extends Component {
    render() {
        const { signedIn, route } = this.props;
        return (
            <div>
                {' '}
                <Navigation route={route} signedIn={signedIn} />
                <div
                    className=""
                    style={{
                        marginTop: '20vh'
                    }}
                >
                    <div className="center">
                        <img
                            style={{
                                width: '30vw',
                                maxWidth: '400px',
                                height: 'auto'
                            }}
                            alt="logo"
                            src={logo}
                        />
                    </div>{' '}
                    <div
                        style={{
                            width: '30vw'
                        }}
                        className="mt3 center"
                    >
                        <SearchBar onChange={''} />
                        {signedIn ? (
                            <div className="mt3">
                                {' '}
                                <a className="dim pointer f4 ">
                                    Selling an item?
                                </a>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
