import React, { Component } from 'react';

class SearchBar extends Component {
    submitSearch = (data) => {    
        var search = this.search.value
        fetch ('/search', {
            method: "POST",
            body: JSON.stringify(search),
            credentials : 'include'
        })
        .then(x => x.json())
        .then(y => console.log(y))
        console.log(JSON.stringify(search))
    }

    liveSearch = (data) => {
        var search = data.target.value
        // fetch ('/search', {
        //     method: "POST",
        //     body: JSON.stringify(search),
        //     credentials : 'include'
        // })
        console.log(search)
    }
    
    render() {
        //object destructuring to save keystrokes -> ties params inside curly braces to this.props
        //const { onInputChange, onSubmit } = this.props;
        return (
            <div className="flex flex-column justify-center w-100 ">
                <div className="center flex justify-center w-100">
                    <input
                        //this param, this.props.onInputChange will detect the input value, and be used to pass it to the fetch query in the parent container
                        //ie: search for "books", parent container will receive "books" and POST it to the server ? 
                        //WHY?!?! that just seem unnecessarily complicated for a page with one bar that needs to send the fetch? 

                        //onChange={onInputChange}
                        onChange={e => this.liveSearch(e)}
                        className="f4 dim pa2 w-100 center shadow-1 br2"
                        ref={r => (this.search = r)}
                        type="text"
                        style={{
                            border: 'none',
                            minWidth: '350px'
                        }}
                    />
                    <button
                        //this param, this.props.onSubmit will submit the input value from above
                        //onClick={onSubmit}
                        onClick={e => this.submitSearch(e)}
                        className="f4 link ph3 pv2 dib bg-white dim pointer flex justify-center self-center "
                        style={{
                            // border: 'none',
                            color: '#F6841F',
                            height: '22px',
                            borderBottom: 'none',
                            borderRight: 'none',
                            borderTop: 'none',
                            borderLeft: '1px solid #dddddd',
                            position: 'relative',
                            minWidth: '90px',
                            marginLeft: '-91px',
                            lineHeight: '5px'
                        }}
                    >
                        Go
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
