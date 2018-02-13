import React, { Component } from 'react';
import Login from '../../components/login/login'
import logo from '../../images/Alibay.png'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <img alt="Alibay Logo" src={logo}/>
                <Login/>
            </div>
        )
    }
}

export default LoginPage;