import React, { Component } from 'react';
import Signup from '../../components/signup/signup';
import logo from '../../images/Alibay.png';

class SignupPage extends Component {
    render() {
        return (
            <div>
                <div className="flex justify-center center">
                    <img alt="Alibay Logo" src={logo} />
                </div>
                <Signup
                    toggleSignUp={this.props.toggleSignUp}
                    toggleLogin={this.props.toggleLogin}
                />
            </div>
        );
    }
}

export default SignupPage;
