import React, { Component } from 'react';
import logo from '../../images/Alibay.png';
import SearchBar from '../../components/searchBar/searchBar';

class HomePage extends Component {
    render() {
        const { signedIn } = this.props;
        return (
            <div
                className=""
                style={{
                    marginTop: '20vh'
                }}
            >
                <div className="center">
                    <img
                        style={{
                            width: '40vw',
                            maxWidth: '450px',
                            height: 'auto'
                        }}
                        alt="logo"
                        src={logo}
                    />
                </div>{' '}
                <div
                    style={{
                        width: '40vw'
                    }}
                    className="mt3 center"
                >
                    <SearchBar onChange={''} />
                    {signedIn ? (
                        <div className="mt3">
                            {' '}
                            <a className="dim pointer f4 ">Selling an item?</a>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}
export default HomePage;
