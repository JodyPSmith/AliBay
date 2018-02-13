import React, { Component } from 'react';



class Signup extends Component {
    constructor () { 
        super();
        this.state ={}
    }
    
    signUp = () => {
        let data = { "username" : this.signupName.value, "password" : this.signupPW.value, "email" : this.signupEmail.value}
        this.signupPW.value === this.signupPWconf.value ? 
        fetch('/signUp', {
            method : "POST",
            body : JSON.stringify(data)
        })
        .then(x => x.text())
        .then(y => console.log(y))
        : console.log("password mismatch");
        
    }
    
    render() {
        let signupPage = (
            <div>
                <div className="flex flex-column justify-center content-center">
                    <h1> Please Sign up here </h1>
                    <h2> Username </h2>
                    <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupName" size="3" placeholder="Enter name here" ref={r => this.signupName = r} />

                    <h2> Password </h2>
                    <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupPW" type="password" size="3" placeholder="Enter password here" ref={r => this.signupPW = r} />

                    <h2> Re-enter Password </h2>
                    <input className="f4 dim pa2 w-60 center shadow-5 br1" id="signupPWconf" type="password" size="3" placeholder="Re-enter password here" ref={r => this.signupPWconf = r} />

                    <h2> Email Address </h2>
                    <input type="email" className="f4 dim pa2 w-60 center shadow-5 br1" id="signupEmail" size="3" placeholder="Enter email address here" ref={r => this.signupEmail = r} />

                    <br />
                    <button onClick={this.signUp} className="f4 dim pa2 w-20 center shadow-5 br1" id="signupPW" size="3">Sign Up</button>
                </div>
            </div>
        )
        return (signupPage);
    }
}

export default Signup;