import React, { Component } from 'react';



class Login extends Component {
    sendLogin = () => {
        let data = {"username" : this.loginName.value, "password" : this.loginPW.value}
        console.log(data)
        
    };
    
    render() {
        let loginPage = (
            <div>
                <div className="flex flex-column justify-center content-center">
                    <h1> Please Login here </h1>
                    <h2> Username </h2>
                    <input className="f4 dim pa2 w-60 center shadow-5 br1" id="loginName" size="3" placeholder="Enter name here" ref={r => this.loginName = r} />
            
                    <h2> Password </h2>
                    <input className="f4 dim pa2 w-60 center shadow-5 br1" id="loginPW" type="password" size="3" placeholder="Enter password here" ref={r => this.loginPW = r} />
               
                    <br />
                    <button onClick={this.sendLogin} className="f4 dim pa2 w-20 center shadow-5 br1"  size="3"> Log In </button>
                </div>
            </div>
        )
        return (loginPage);
    }
}

export default Login;
