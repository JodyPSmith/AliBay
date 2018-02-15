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
            "country" : this.signupCountry.value
        }

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
                <div className="center">
                    <h1 className="flex justify-center center"> Please Signup here </h1>
                    
                    <input placeholder="First Name" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" id="firstname" ref={r => this.signupFname = r} />
                    <input placeholder="Last Name" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" id="lastname" ref={r => this.signupLname = r}  />
                    <input placeholder="Desired Username" id="signupName" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" ref={r => this.signupName = r}  />
                    <input placeholder="Password" id="signupPW" type="password" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn"  ref={r => this.signupPW = r}  />
                    <input placeholder="Re-enter Password" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" id="signupPWconf" type="password" ref={r => this.signupPWconf = r}  />                    
                    <input placeholder="Email Address" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" id="signupEmail" type="email"  ref={r => this.signupEmail = r}  />
                    <input placeholder="Street Address" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" id="address"  ref={r => this.signupAddress = r} /> 
                    <input placeholder="City"id="city" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" ref={r => this.signupCity = r} />
                    <input id="StateProvince" placeholder="Province or State" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" ref={r => this.signupProvince = r} />
                    <input id="zip" placeholder="Postal Code or Zip" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" ref={r => this.signupPC = r} />
                    <input placeholder="Country" id="country" className="f5 ma2 dim pa2 w-55 center shadow-5 mw-55 bn" ref={r => this.signupCountry = r} />
                    <br />
                    <button className="flex justify-center center" onClick={this.signUp} id="signupPW" size="3">Sign Up</button>
                    
                </div>
            </div>
        )
        return (signupPage);
    }
}

export default Signup;