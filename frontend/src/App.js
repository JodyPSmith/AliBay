import React, { Component } from 'react';
import './App.css';
// import LogIn from './components/google-OAuth/googleOauth';
// import SearchBar from './components/searchBar/searchBar';
// import Dashboard from './components/dashboard/dashboard';
//import Signup from './components/signup/signup';
//import logo from './images/Alibay.png';
import Login from './components/login/login';
// import SearchBar from './components/searchBar/searchBar';
// import CardList from './components/Card/CardList';
// import Navigation from './components/Navigation/Navigation';
// import logo from './images/Alibay.png';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isSignedIn: true
        };
    }
    render() {
        const { isSignedIn } = this.state;
        return (
            <div className="App ">
                {/* <Navigation /> */}
                {/* <div
                    style={{
                        marginTop: '20vh'
                    }}
                >
                    <div className="">
                        <img alt="logo" src={logo} />
                    </div>{' '}
                    <div className="mt3">
                        <SearchBar onChange={''} />
                        {isSignedIn ? (
                            <p className="dim pointer f4">Selling an item?</p>
                        ) : null}
                    </div>
                </div> */}
                <Login />

                {/*<CardList />*/}
            </div>
        );
    }
}

export default App;
