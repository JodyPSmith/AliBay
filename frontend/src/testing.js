import React, { Component } from 'react';

class Testing extends Component {
    findMe = () => {
        document.getElementById('myDropdown').classList.toggle('show');
    };
    render() {
        const { click } = this.props;
        return (
            <div className="dropdown">
                <a
                    onClick={() => {
                        this.findMe();
                    }}
                    className="dropbtn bg-white br2 pointer dim"
                >
                    Dropdown
                </a>
                <div
                    id="myDropdown"
                    className="dropdown-content bg-white shadow-1 mr4"
                >
                    <a className="pointer dim" onClick={() => click('home')}>
                        Home
                    </a>
                    <a className="pointer dim" onClick={() => click('')}>
                        Search Page
                    </a>
                    <a
                        className="pointer dim"
                        onClick={() => click('confirmationPage')}
                    >
                        Confirmation Page
                    </a>
                    <a className="pointer dim" onClick={() => click('testing')}>
                        Testing Page
                    </a>
                </div>
            </div>
        );
    }
}

export default Testing;
