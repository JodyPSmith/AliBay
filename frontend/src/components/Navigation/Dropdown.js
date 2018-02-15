import React, { Component } from 'react';
import Modal from 'react-modal';
import modalCss from './modalcss';
import LoginPage from '../../Containers/LoginPage/LoginPage';
import SignUpPage from '../../Containers/SignupPage/SignupPage';
import Scroll from '../../Containers/scroll';
import { Link } from 'react-router-dom';

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            loginIsOpen: false,
            signUpIsOpen: false
        };
    }
    toggleDropdown = () => {
        document.getElementById('myDropdown').classList.toggle('show');
    };
    toggleLoginModal = () => {
        this.setState({ loginIsOpen: !this.state.loginIsOpen });
    };
    toggleSignUpModal = () => {
        this.setState({ signUpIsOpen: !this.state.signUpIsOpen });
    };
    componentDidMount() {
        console.log(Modal.defaultStyles);
        1;
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName(
                    'dropdown-content'
                );
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    }
    render() {
        const { setRoute } = this.props;
        const { loginIsOpen, signUpIsOpen } = this.state;
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
                    <Link className="pointer dim" to="/">
                        Home
                    </Link>
                    <Link className="pointer dim" to="/dashboard">
                        Dashboard
                    </Link>
                    <Link className="pointer dim" to="/search">
                        Search Page
                    </Link>
                    <Link className="pointer dim" to="/confirm">
                        Confirmation Page
                    </Link>
                    <Link className="pointer dim" to="/add">
                        Add Listing
                    </Link>
                    <a className="pointer dim" onClick={this.toggleSignUpModal}>
                        Signup
                    </a>
                    <a className="pointer dim" onClick={this.toggleLoginModal}>
                        Login Page
                    </a>
                    <Modal
                        isOpen={signUpIsOpen}
                        onRequestClose={this.toggleSignUpModal}
                        shouldCloseOnOverlayClick={true}
                        style={modalCss}
                        className={{
                            base: 'bg-white br3 shadow-1 pa4 myModal'
                        }}
                    >
                        <Scroll shadow="">
                            <SignUpPage />
                        </Scroll>
                    </Modal>
                    <Modal
                        isOpen={loginIsOpen}
                        onRequestClose={this.toggleLoginModal}
                        shouldCloseOnOverlayClick={true}
                        style={modalCss}
                        className={{
                            base: 'bg-white br3 shadow-1 pa4 myModal'
                        }}
                    >
                        <LoginPage />
                    </Modal>{' '}
                </div>
            </div>
        );
    }
}

export default Dropdown;
