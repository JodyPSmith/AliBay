import React, { Component } from 'react';

class Testing extends Component {
    findMe = () => {
        document.getElementById('myDropdown').classList.toggle('show');
    };
    render() {
        const { click } = this.props;
        return (
            <div className="dropdown">
                <button
                    onClick={() => {
                        this.findMe();
                    }}
                    className="dropbtn"
                >
                    Dropdown
                </button>
                <div id="myDropdown" className="dropdown-content">
                    <a className="pointer" onClick={() => click('home')}>
                        Home
                    </a>
                    <a className="pointer" onClick={() => click('')}>
                        Search Page
                    </a>
                    <a
                        className="pointer"
                        onClick={() => click('confirmationPage')}
                    >
                        Confirmation Page
                    </a>
                    <a className="pointer" onClick={() => click('testing')}>
                        Testing Page
                    </a>
                </div>
            </div>
        );
    }
}

export default Testing;
