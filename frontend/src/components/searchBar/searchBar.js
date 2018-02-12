import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const { onInputChange, onSubmit } = this.props;
        return (
            <div className="flex flex-column justify-center content-center ">
                <div className="center" style={{ width: '35vw' }}>
                    <input
                        onChange={onInputChange}
                        className="f4 dim pa2 w-60 center shadow-5 br1"
                        type="text"
                        style={{ border: 'none' }}
                    />
                    <button
                        onClick={onSubmit}
                        className="w-20  f4 link ph3 pv2 dib black bg-white shadow-5 ml1 dim br1 pointer"
                        style={{ border: 'none', minWidth: '90px' }}
                    >
                        Go
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
