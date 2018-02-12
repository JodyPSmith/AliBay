import React, { Component } from 'react';
import SearchBar from './searchBar';
import logo from '../../images/Alibay.png';

class InAppSearchBar extends Component {
    render() {
        return (
            <div className="flex">
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        maxWidth: 'auto',
                        maxHeight: '40px',
                        marginTop: '2vh'
                    }}
                />
                <SearchBar />
            </div>
        );
    }
}

export default InAppSearchBar;
