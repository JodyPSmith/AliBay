import React, { Component } from 'react';
import './App.css';
import LogIn from './components/google-OAuth/googleOauth';
import SearchBar from './components/searchBar/searchBar';
import CardList from './components/Card/CardList';

class App extends Component {
    render() {
        return (
            <div className="App ">
                {/*<Navigation />*/}
                <SearchBar onChange={''} />
                {/*<LogIn />*/}

                <CardList />
            </div>
        );
    }
}

export default App;
