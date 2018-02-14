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
                <div >
                    <h1 className="flex justify-center center"> Please Signup here</h1>
                    
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> First Name <input className="mw-50 w-50 fr" id="firstname" ref={r => this.signupFname = r} /></h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Last Name <input className="mw-50 w-50 fr" id="lastname" ref={r => this.signupLname = r}  /></h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Desired Username <input id="signupName" className="mw-50 w-50 fr" ref={r => this.signupName = r}  /></h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Password <input id="signupPW" type="password" className="mw-50 w-50 fr"  ref={r => this.signupPW = r}  /></h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Re-enter Password <input className="mw-50 w-50 fr" id="signupPWconf" type="password" ref={r => this.signupPWconf = r}  />  </h3>                  
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Email Address <input className="mw-50 w-50 fr" id="signupEmail" type="email"  ref={r => this.signupEmail = r}  /></h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Street Address <input className="mw-50 w-50 fr" id="address"  ref={r => this.signupAddress = r} /> </h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> City <input id="city" className="mw-50 w-50 fr" ref={r => this.signupCity = r} /> </h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Province or State <input id="StateProvince" className="mw-50 w-50 fr" ref={r => this.signupProvince = r} /> </h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Postal Code or Zip <input id="zip" className="mw-50 w-50 fr" ref={r => this.signupPC = r} /> </h3>
                    <h3 className="f4 dim pa2 w-50 center shadow-5 "> Country <input id="country" className="mw-50 w-50 fr" ref={r => this.signupCountry = r} /> </h3>
                    <br />
                    <button className="flex justify-center center" onClick={this.signUp} id="signupPW" size="3">Sign Up</button>
                </div>
            </div>
        )
        return (signupPage);
    }
}

export default Signup;