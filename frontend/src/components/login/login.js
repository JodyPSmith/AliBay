import React, { Component } from 'react';

let loginPage = (
    <div>
        <div className="flex flex-column justify-center content-center">
            <h1> Please Login here </h1>
            <h2> Username </h2>
            <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupname" size="3" placeholder="Enter name here" ref={r => this.signupName = r} />
        </div>
        <div>
            <h2> Password </h2>
            <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupPW" type="password" size="3" placeholder="Enter password here" ref={r => this.signupPW = r} />
        </div>
        <div>
            <br />
            <input type="submit" className="f4 dim pa2 w-20 center shadow-5 br1" id="signupPW" size="3" ref={r => this.signupSubmit = r} />
        </div>
    </div>
)

class Login extends Component {
    render() {
        return (loginPage);
    }
}

export default Login;
