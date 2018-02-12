import React, { Component } from 'react';
import logo from '../../images/Alibay.png';

class SearchBar extends Component {
    render() {
        return (
            <div className="flex flex-column justify-center content-center ">
                <div className="">
                    <img alt="logo" src={logo} />
                </div>
                <div>
                    <input type="text" name="search" />
                    <input type="submit" value="Go" />
                </div>
            </div>
        );
    }
}

export default SearchBar;
