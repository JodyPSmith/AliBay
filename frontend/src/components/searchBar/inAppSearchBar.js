import React, { Component } from 'react';
import SearchBar from './searchBar';
import miniLogo from '../../images/mini.png';
import { Link } from 'react-router-dom'
class InAppSearchBar extends Component {
    render() {
        return (
            <div className="flex w-50 mt2">
                <Link to="/"><img
                    className="pointer dim"
                    src={miniLogo}
                    alt="logo"
                    style={{
                        maxWidth: 'auto',
                        maxHeight: '40px',
                        marginTop: '2vh',
                        marginRight: '1vw',
                        marginLeft: '2vw',
                        marginBottom: '2vh'
                    }}
                /></Link>
                <SearchBar />
            </div>
        );
    }
}

export default InAppSearchBar;
