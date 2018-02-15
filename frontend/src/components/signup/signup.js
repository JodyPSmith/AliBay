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
            <div className="flex justify-center cente mw-50">
                <div>
                    <h1 className="flex justify-center"> Please Signup here </h1>
                    <div>
                        <input placeholder="First Name" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" id="firstname" ref={r => this.signupFname = r} />
                        <input placeholder="Last Name" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" id="lastname" ref={r => this.signupLname = r}  />
                        <input placeholder="Desired Username" id="signupName" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" ref={r => this.signupName = r}  />
                        <input placeholder="Password" id="signupPW" type="password" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn"  ref={r => this.signupPW = r}  />
                        <input placeholder="Re-enter Password" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" id="signupPWconf" type="password" ref={r => this.signupPWconf = r}  />                    
                        <input placeholder="Email Address" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" id="signupEmail" type="email"  ref={r => this.signupEmail = r}  />
                        <input placeholder="Street Address" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" id="address"  ref={r => this.signupAddress = r} /> 
                        <input placeholder="City"id="city" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" ref={r => this.signupCity = r} />
                        <input placeholder="Province or State" id="StateProvince" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" ref={r => this.signupProvince = r} />
                        <input placeholder="Postal Code or Zip" id="zip" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" ref={r => this.signupPC = r} />
                        <input placeholder="Country" id="country" className="flex f5 ma2 dim pa2 w-100 center shadow-5 bn" ref={r => this.signupCountry = r} />
                    </div>
                    <br />
                    <button className="flex justify-center center" onClick={this.signUp} id="signupPW" size="3">Sign Up</button>
                </div>
            </div>
        )
        return (signupPage);
    }
}

export default Signup;