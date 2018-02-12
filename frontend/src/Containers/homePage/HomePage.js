import React, { Component } from 'react';
import logo from '../../images/Alibay.png';
import SearchBar from '../../components/searchBar/searchBar';

class HomePage extends Component {
    render() {
        const { signedIn } = this.props;
        return (
            <div
                style={{
                    marginTop: '20vh'
                }}
            >
                <div className="">
                    <img alt="logo" src={logo} />
                </div>{' '}
                <div className="mt3">
                    <SearchBar onChange={''} />
                    {signedIn ? (
                        <p className="dim pointer f4">Selling an item?</p>
                    ) : null}
                </div>
            </div>
        );
    }
}
export default HomePage;
