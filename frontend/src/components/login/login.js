import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount = () => {
        console.log('login component', this.props);
        this.setState({ loginStat: 'no' });
    };

    sendLogin = () => {
        let data = {
            username: this.loginName.value,
            password: this.loginPW.value
        };
        console.log(data);
        fetch('/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then(x => x.json())
            .then(y => {
                if (y.res === true) {
                    this.setState({ loginStat: 'yes' });
                    //this prop is called first here, passed up to LoginPage, then passed to the dropdown component, then passed to the navigation component, then passed to App.js where it's called --- sorry Jody for messing with your code, just wanted to see if it worked!
                    setTimeout(() => this.props.setSignIn(), 2500);
                } else {
                    this.setState({ loginStat: 'failed' });
                    setTimeout(() => this.setState({ loginStat: 'no' }), 2000);
                }
            });
    };

    render() {
        let loginPage = (
            <div>
                <div>
                    <h1 className="flex justify-center f3">
                        {' '}
                        Please Login here{' '}
                    </h1>
                    <input
                        className="flex f5 ma2 dim pa2 w-100 mw-100 center shadow-5 bn"
                        //className="f4 dim m10 pa2 w-90 center shadow-5 br1"
                        id="loginName"
                        placeholder="Enter username here"
                        ref={r => (this.loginName = r)}
                    />
                    <input
                        className="flex f5 ma2 dim pa2 w-100 mw-100 center shadow-5 bn"
                        //className="f4 dim m10 pa2 w-90 center shadow-5 br1"
                        id="loginPW"
                        type="password"
                        placeholder="Enter password here"
                        ref={r => (this.loginPW = r)}
                    />
                    <br />
                    <button
                        onClick={this.sendLogin}
                        className="flex flex-column content-center center ma3 f4 dim pa2 w-40 justify-center shadow-5 br1"
                    >
                        {' '}
                        Log In{' '}
                    </button>
                </div>
            </div>
        );

        let loginFailure = (
            <div>
                <h2 className="center">Log in Failed, No Selling for you!!</h2>
            </div>
        );

        let loginSuccess = (
            <div>
                <h2 className="center">Login Success</h2>
            </div>
        );

        if (this.state.loginStat === 'no') {
            return loginPage;
        } else if (this.state.loginStat === 'yes') {
            return loginSuccess;
        } else {
            return loginFailure;
        }
    }
}

export default Login;
