import React, { Component } from 'react';
import SearchBar from './searchBar';
import logo from '../../images/Alibay.png';
import miniLogo from '../../images/mini.png';

class InAppSearchBar extends Component {
    render() {
        return (
            <div className="flex">
                <img
                    src={miniLogo}
                    alt="logo"
                    style={{
                        maxWidth: 'auto',
                        maxHeight: '40px',
                        marginTop: '2vh',
                        marginRight: '2vw',
                        marginLeft: '2vw'
                    }}
                />
                <SearchBar />
            </div>
        );
    }
}

export default InAppSearchBar;
