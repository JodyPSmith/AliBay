import React, { Component } from 'react';
import './App.css';
import logo from './images/Alibay.png';
import LogIn from './components/google-OAuth/googleOauth';
class App extends Component {
    render() {
        return (
            <div className="App">
                <img alt="logo" src={logo} />
                {/*<LogIn />*/}
            </div>
        );
    }
}

export default App;
