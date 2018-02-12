import React, { Component } from 'react';
import './App.css';
// import LogIn from './components/google-OAuth/googleOauth';
// import SearchBar from './components/searchBar/searchBar';
// import Dashboard from './components/dashboard/dashboard';
import Signup from './components/signup/signup';
import Login from './components/login/login';
//import logo from './images/Alibay.png';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Login/>
            </div>
        );
    }
}

export default App;
