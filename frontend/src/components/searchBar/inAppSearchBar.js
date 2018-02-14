import React, { Component } from 'react';
import SearchBar from './searchBar';
import miniLogo from '../../images/mini.png';

class InAppSearchBar extends Component {
    render() {
        return (
            <div className="flex w-50 ">
                <img
                    className="pointer dim"
                    src={miniLogo}
                    alt="logo"
                    style={{
                        maxWidth: 'auto',
                        maxHeight: '40px',
                        marginTop: '2vh',
                        marginRight: '1vw',
                        marginLeft: '2vw'
                    }}
                />
                <SearchBar />
            </div>
        );
    }
}

export default InAppSearchBar;
