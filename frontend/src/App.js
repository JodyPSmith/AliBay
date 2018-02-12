import React, { Component } from 'react';
import './App.css';
import logo from './images/Alibay.png';
import LogIn from './components/google-OAuth/googleOauth';
import SearchBar from './components/searchBar/searchBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <img alt="logo" src={logo} />
                <SearchBar />
                {/*<LogIn />*/}
            </div>
        );
    }
}

export default App;
