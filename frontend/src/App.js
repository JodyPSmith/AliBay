import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import LogIn from './components/google-OAuth/googleOauth';
import SearchBar from './components/searchBar/searchBar';
import CardList from './components/Card/CardList';
import Navigation from './components/Navigation/Navigation';
import logo from './images/Alibay.png';
import SearchPage from './Containers/SearchPage/SearchPage';
=======
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

>>>>>>> 75c3f9d2ac6f7deadd420b82129e569861748e39
class App extends Component {
    constructor() {
        super();
        this.state = {
            isSignedIn: true,
            hasSearched: true
        };
    }
    render() {
        const { isSignedIn, hasSearched } = this.state;
        return !hasSearched ? (
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
<<<<<<< HEAD
                </div>
=======
                </div> */}
                <Login />

                {/*<CardList />*/}
>>>>>>> 75c3f9d2ac6f7deadd420b82129e569861748e39
            </div>
        ) : (
            <SearchPage />
        );
    }
}

export default App;
