import React, { Component } from 'react';

let signupPage = (
    <div>
        <div className="flex flex-column justify-center content-center">
            <h1> Please Sign up here </h1>
            <h2> Username </h2>
            <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupname" size="3" placeholder="Enter name here" ref={r => this.signupName = r} />
        </div>
        <div>
            <h2> Password </h2>
            <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupPW" type="password" size="3" placeholder="Enter password here" ref={r => this.signupPW = r} />
        </div>
        <div>
            <h2> Re-enter Password </h2>
            <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupPW" type="password" size="3" placeholder="Re-enter password here" ref={r => this.signupPWconf = r} />
        </div>
        <div>
            <h2> Email Address </h2>
            <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupPW" size="3" placeholder="Enter email address here" ref={r => this.signupEmail = r} />
        </div>
        <div>
            <br />
            <input type="submit" className="f4 dim pa2 w-20 center shadow-5 br1" id="signupPW" size="3" ref={r => this.signupSubmit = r} />
        </div>
    </div>
)

class Signup extends Component {
    render() {
        return (signupPage);
    }
}

export default Signup;