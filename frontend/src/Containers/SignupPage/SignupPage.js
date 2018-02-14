import React, { Component } from 'react'
import Signup from '../../components/signup/signup'
import logo from '../../images/Alibay.png'

class SignupPage extends Component {
    constructor () {
        super();
        this.state = {};
    }

    render() {
        
        return (
            <div>
                <img alt="Alibay Logo" src={logo} />
                <Signup setRoute={this.props.setRoute}/>
            </div>
        )
    }
}

export default SignupPage;