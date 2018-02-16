import React, { Component } from 'react';
import Login from '../../components/login/login';
import logo from '../../images/Alibay.png';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <img alt="Alibay Logo" src={logo} />
                <Login
                    signedIn={this.props.signedIn}
                    setSignIn={this.props.setSignIn}
                />
            </div>
        );
    }
}

export default LoginPage;
