import React, { Component } from 'react';
import logo from '../../images/Alibay.png';
import SearchBar from '../../components/searchBar/searchBar';
import Navigation from '../../components/Navigation/Navigation';

class HomePage extends Component {
    render() {
        const { signedIn, route, click } = this.props;
        return (
            <div className="center">
                {' '}
                <Navigation click={click} route={route} signedIn={signedIn} />
                <div
                    className="center"
                    style={{
                        marginTop: '20vh'
                    }}
                >
                    <div className="flex justify-center">
                        <img
                            className="center"
                            style={{
                                width: '30vw',
                                maxWidth: '400px',
                                height: 'auto'
                            }}
                            alt="logo"
                            src={logo}
                        />
                    </div>
                    <div
                        style={{
                            width: '30vw'
                        }}
                        className="mt3 center"
                    >
                        <SearchBar onChange={''} />
                        {!signedIn || (
                            <div className="mt3 flex justify-center">
                                <a className="dim pointer f4 mr3 ">
                                    Selling an item?
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
