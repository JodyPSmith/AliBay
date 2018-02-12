import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="">
                <input type="text" name="search" />
                <input type="submit" value="Go" />
            </div>
        );
    }
}

export default SearchBar;
