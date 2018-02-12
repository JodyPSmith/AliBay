import React, { Component } from 'react';
import './App.css';
import LogIn from './components/google-OAuth/googleOauth';
import SearchBar from './components/searchBar/searchBar';
import Dashboard from './components/dashboard/dashboard'

class App extends Component {
    render() {
        return (
            <div className="App">
                <img alt="logo" src={logo} />
                <SearchBar />
            
                <LogIn />
                <Dashboard />
            </div>
        );
    }
}

export default App;
