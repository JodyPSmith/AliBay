import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import miniLogo from '../../images/mini.png';
class InAppSearchBar extends Component {
    render() {
        return (
            <div className="flex w-50 mt2">
                <Link className="mr3" to="/">
                    <img
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
                    />
                </Link>
                <SearchBar searchResult={this.props.searchResult} />
            </div>
        );
    }
}

export default InAppSearchBar;
