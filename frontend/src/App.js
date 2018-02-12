import React, { Component } from 'react';
import './App.css';
import LogIn from './components/google-OAuth/googleOauth';
import SearchBar from './components/searchBar/searchBar';
import CardList from './components/Card/CardList';
import Navigation from './components/Navigation/Navigation';
import logo from './images/Alibay.png';

class App extends Component {
    render() {
        return (
            <div className="App ">
                <Navigation />
                <div className="">
                    <img alt="logo" src={logo} />
                </div>
                <SearchBar onChange={''} />
                {/*<LogIn />*/}

                <CardList />
            </div>
        );
    }
}

export default App;
