import React, { Component } from 'react';
import './App.css';
import LogIn from './components/google-OAuth/googleOauth';
import SearchBar from './components/searchBar/searchBar';

class App extends Component {
    render() {
        return (
            <div className="App ">
                {/*<Navigation />*/}
                <SearchBar />
                {/*<LogIn />*/}
            </div>
        );
    }
}

export default App;
