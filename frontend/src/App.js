import React, { Component } from 'react';
import './App.css';
import LogIn from './components/google-OAuth/googleOauth';
import SearchBar from './components/searchBar/searchBar';
import Card from './components/Card/Card';

class App extends Component {
    render() {
        return (
            <div className="App ">
                {/*<Navigation />*/}
                <SearchBar onChange={''} />
                {/*<LogIn />*/}
                <Card />
            </div>
        );
    }
}

export default App;
