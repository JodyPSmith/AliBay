import React, { Component } from 'react';

class Dropdown extends Component {
    toggleDropdown = () => {
        document.getElementById('myDropdown').classList.toggle('show');
    };
    render() {
        const { click } = this.props;
        return (
            <div className="dropdown">
                <a
                    onClick={() => {
                        this.toggleDropdown();
                    }}
                    className="dropbtn bg-white br2 pointer dim"
                >
                    Menu
                </a>
                <div
                    id="myDropdown"
                    className="dropdown-content bg-white shadow-1 mr4"
                >
                    <a className="pointer dim" onClick={() => click('home')}>
                        Home
                    </a>
                    <a
                        className="pointer dim"
                        onClick={() => click('dashboard')}
                    >
                        Dashboard
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
                    <a className="pointer dim" onClick={() => click('SignupPage')}>
                        Signup
                    </a>
                    <a className="pointer dim" onClick={() => click('LoginPage')}>
                        Login
                    </a>
                </div>
            </div>
        );
    }
}

export default Dropdown;
