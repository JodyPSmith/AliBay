import React, { Component } from 'react';
import Modal from 'react-modal';
import modalCss from './modalcss';
import LoginPage from '../../Containers/LoginPage/LoginPage';

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
    }
    toggleDropdown = () => {
        document.getElementById('myDropdown').classList.toggle('show');
    };
    toggleModal = () => {
        this.setState({ modalIsOpen: !this.state.modalIsOpen });
    };
    componentDidMount() {
        console.log(Modal.defaultStyles);
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
        const { modalIsOpen } = this.state;
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
                    <a className="pointer dim" onClick={() => setRoute('home')}>
                        Home
                    </a>
                    <a
                        className="pointer dim"
                        onClick={() => setRoute('dashboard')}
                    >
                        Dashboard
                    </a>
                    <a className="pointer dim" onClick={() => setRoute('')}>
                        Search Page
                    </a>
                    <a
                        className="pointer dim"
                        onClick={() => setRoute('confirmationPage')}
                    >
                        Confirmation Page
                    </a>
                    <a
                        className="pointer dim"
                        onClick={() => setRoute('AddListingPage')}
                    >
                        Add Listing
                    </a>
                    <a
                        className="pointer dim"
                        onClick={() => setRoute('SignupPage')}
                    >
                        Signup
                    </a>
                    <a className="pointer dim" onClick={this.toggleModal}>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={this.toggleModal}
                            shouldCloseOnOverlayClick={false}
                            style={modalCss}
                            className={{
                                base: 'bg-white br3 shadow-1 pa4 myModal'
                            }}
                        >
                            <LoginPage />
                        </Modal>{' '}
                        Login Page
                    </a>
                </div>
            </div>
        );
    }
}

export default Dropdown;
