import React, { Component } from 'react';



class Signup extends Component {
    constructor () { 
        super();
        this.state ={}
    }
    
    signUp = () => {
        let data = { 
            "username" : this.signupName.value, 
            "password" : this.signupPW.value, 
            "email" : this.signupEmail.value,
        
            "firstname" : this.signupFname.value,
            "lastname" : this.signupLname.value,
            "address" : this.signupAddress.value,
            "city" : this.signupCity.value,
            "province" : this.signupProvince.value,
            "postal_code" : this.signupPC.value,
            "country" : this.signupCountry.value}
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
                    <h2> First Name </h2>
                    <input id="firstname" size="3" placeholder="First Name" ref={r => this.signupFname = r} className="f4 dim pa2 w-60 center shadow-5 br1"/>
                    <h2> Last Name </h2>
                    <input id="lastname" size="3" placeholder="Last Name" ref={r => this.signupLname = r} className="f4 dim pa2 w-60 center shadow-5 br1" />
                    <h2> Desired Username </h2>
                    <input id="signupName" size="3" placeholder="Enter your desired username here" ref={r => this.signupName = r} className="f4 dim pa2 w-60 center shadow-5 br1" />
                    <h2> Password </h2>
                    <input id="signupPW" type="password" size="3" placeholder="Enter password here" ref={r => this.signupPW = r} className="f4 dim pa2 w-60 center shadow-5 br1" />
                    <h2> Re-enter Password </h2>
                    <input id="signupPWconf" type="password" size="3" placeholder="Re-enter password here" ref={r => this.signupPWconf = r} className="f4 dim pa2 w-60 center shadow-5 br1" />                    
                    <h2>Email Address </h2>
                    <input id="signupEmail" type="email" size="3" placeholder="Enter email address here" ref={r => this.signupEmail = r} className="f4 dim pa2 w-60 center shadow-5 br1" />
                    <h2> Street Address </h2>
                    <input id="address" size="3" placeholder="Street Address" ref={r => this.signupAddress = r} className="f4 dim pa2 w-60 center shadow-5 br1"/>
                    <h2> City </h2>
                    <input id="city" size="3" placeholder="City" ref={r => this.signupCity = r} className="f4 dim pa2 w-60 center shadow-5 br1"/>
                    <h2> Province or State </h2>
                    <input id="StateProvince" size="3" placeholder="State or Province" ref={r => this.signupProvince = r} className="f4 dim pa2 w-60 center shadow-5 br1"/>
                    <h2> Postal Code or Zip </h2>
                    <input id="zip" size="3" placeholder="ZIP or Postal Code" ref={r => this.signupPC = r} className="f4 dim pa2 w-60 center shadow-5 br1"/>
                    <h2> Country </h2>
                    <input id="country" size="3" placeholder="Country" ref={r => this.signupCountry = r} className="f4 dim pa2 w-60 center shadow-5 br1"/>
                    <br />
                    <button onClick={this.signUp} className="f4 dim pa2 w-20 center shadow-5 br1" id="signupPW" size="3">Sign Up</button>
                </div>
            </div>
        )
        return (signupPage);
    }
}

export default Signup;