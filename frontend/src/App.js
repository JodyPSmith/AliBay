import React, { Component } from 'react';
import './App.css';
import logo from './images/Alibay.png';
class App extends Component {
    render() {
        return (
            <div className="App">
                <img alt="logo" src={logo} />
            </div>
        );
    }
}

export default App;
