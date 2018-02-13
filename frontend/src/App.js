import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/dashboard/dashboard';
import Signup from './components/signup/signup';
// import Login from './components/login/login';
// import LoginPage from './Containers/LoginPage/LoginPage';
// import AddListingPage from './Containers/AddListingPage/AddListingPage';
import SearchPage from './Containers/SearchPage/SearchPage';
import ItemPage from './Containers/ItemPage/ItemPage';
import HomePage from './Containers/homePage/HomePage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            //checks to see if user is signed in
            isSignedIn: true,
            //placeholder to simulate searching
            hasSearched: true,
            //needed to simulate url change, default is home
            route: 'itemPage',
            //needed to pass in data from specific item page
            item: {
                id: 1,
                name: 'name',
                price: 'PRICE',
                image:
                    'http://www.gadgetreview.com/wp-content/uploads/2016/01/Epson-Home-Cinema-2040-1.jpg',
                desc:
                    'Lorem ipsum dolor sit amet, te quem omnes sed, duo at iuvaret sanctus. Eam omnis epicurei pertinax at. Sanctus scaevola phaedrum nam ad, commune dignissim pri ne. Eum ut feugiat apeirian, legendos pericula eum no, ius habeo dicat tation ex. Pro no semper viderer, autem falli constituto at usu. Lorem ipsum dolor sit amet, te quem omnes sed, duo at iuvaret sanctus. Eam omnis epicurei pertinax at. Sanctus scaevola phaedrum nam ad, commune dignissim pri ne. Eum ut feugiat apeirian, legendos pericula eum no, ius habeo dicat tation ex. Pro no semper viderer, autem falli constituto at usu. Lorem ipsum dolor sit amet, te quem omnes sed, duo at iuvaret sanctus. Eam omnis epicurei pertinax at. Sanctus scaevola phaedrum nam ad, commune dignissim pri ne. Eum ut feugiat apeirian, legendos pericula eum no, ius habeo dicat tation ex. Pro no semper viderer, autem falli constituto at usu. Lorem ipsum dolor sit amet, te quem omnes sed, duo at iuvaret sanctus. Eam omnis epicurei pertinax at. Sanctus scaevola phaedrum nam ad, commune dignissim pri ne. Eum ut feugiat apeirian, legendos pericula eum no, ius habeo dicat tation ex. Pro no semper viderer, autem falli constituto at usu.'
            }
        };
    }

    setItemPage = data => {
        //TODO: this function is undefined, Use this.props.children to find payload from CardList!
        this.setState({
            item: data,
            route: 'itemPage'
        });
    };

    render() {
        // object destructuring to clean code up. It takes all the params in the curly braces and applies this.state to them
        const { isSignedIn, hasSearched, route, item } = this.state;
        //ternary operator to check what route the page is on... default is home
        return route === 'home' ? (
            <div className="App ">
                {/* <Navigation signedIn={isSignedIn} />
                <HomePage signedIn={isSignedIn} /> */}
                <AddListingPage/>

                <Signup/>
            </div>
        ) : route === 'itemPage' ? (
            <ItemPage item={item} route={route} signedIn={isSignedIn} />
        ) : //conditional to simulate searching -> if true display search page
        hasSearched ? (
            <SearchPage signedIn={isSignedIn} />
            
        ) : null;
    }
}

export default App;
