import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = { signedIn: "failed" }
    }

    sendLogin = () => {
        let data = {
            username: this.loginName.value,
            password: this.loginPW.value
        };
        console.log(data);
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then(x => x.text())
            .then(y => console.log(y))
            .then(y => {
                if (y.res === true) {
                    this.setState({ signedIn: "yes" })
                } else {
                    this.setState({ signedIn: "failed" })
                }
            });
    };

    render() {
        let loginPage = (
            <div>
                <div >
                    <h1 > Please Login here </h1>
                    <input
                        className="f4 dim m10 pa2 w-90 center shadow-5 br1"
                        id="loginName"
                        placeholder="Enter username here"
                        ref={r => (this.loginName = r)}
                    />
                    <input
                        className="f4 dim m10 pa2 w-90 center shadow-5 br1"
                        id="loginPW"
                        type="password"
                        placeholder="Enter password here"
                        ref={r => (this.loginPW = r)}
                    />
                    <br />
                    <button onClick={this.sendLogin} className="flex flex-column content-center center ma3 f4 dim pa2 w-40 justify-center shadow-5 br1">
                        {' '}Log In{' '}
                    </button>
                </div>
            </div>
        );
        
        let loginFailure = (
            <div>
                <h1>Log in Failed, No Selling for you!!</h1>   
            </div>
        )
        
        let loginSuccess = (
            <div className="">
                <h1>Login Success</h1>    
            </div>
        )
        
        if (this.state.signedIn === "no") {
            return loginPage
        } else if (this.state.signedIn === "yes"){

            return loginSuccess
        } else {
            setTimeout(() => {this.setState.signedIn = "no"}, 1000)
            return loginFailure
        }
        
    }
}

export default Login;
