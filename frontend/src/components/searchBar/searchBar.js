import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const { onInputChange, onSubmit } = this.props;
        return (
            <div className="flex flex-column justify-center  ">
                <div
                    style={{
                        width: '30vw'
                    }}
                    className="center flex"
                >
                    <input
                        onChange={onInputChange}
                        className="f4 dim pa2  center shadow-5 br1"
                        type="text"
                        style={{
                            border: 'none',
                            width: '100%'
                        }}
                    />
                    <button
                        onClick={onSubmit}
                        className="  f4 link ph3 pv2 dib black bg-white shadow-5 ml1 dim br1 pointer"
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
