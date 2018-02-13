import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        //object destructuring to save keystrokes -> ties params inside curly braces to this.props
        const { onInputChange, onSubmit } = this.props;
        return (
            <div className="flex flex-column justify-center  ">
                <div className="center flex justify-center w-100">
                    <input
                        //this param, this.props.onInputChange will detect the input value, and be used to pass it to the fetch query in the parent container
                        //ie: search for "books", parent container will receive "books" and POST it to the server

                        onChange={onInputChange}
                        className="f4 dim pa2 w-100 center shadow-5 br1"
                        type="text"
                        style={{
                            border: 'none'
                        }}
                    />
                    <button
                        //this param, this.props.onSubmit will submit the input value from above
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
