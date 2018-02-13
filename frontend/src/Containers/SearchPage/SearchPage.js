import React, { Component } from 'react';
import CardList from '../../components/Card/CardList';
import Navigation from '../../components/Navigation/Navigation';
import Scroll from '../scroll';
import './SearchPage.css';
import InAppSearchBar from '../../components/searchBar/inAppSearchBar';
class SearchPage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                {' '}
                <div className="flex justify-between">
                    <InAppSearchBar />
                    {/* this prop will check if the state in the parent container, isSignedIn, is true or false
                        see documentaion in Navigation component*/}
                    <Navigation signedIn={this.props.signedIn} />
                </div>
                <div id="SearchPage" className="mt5">
                    <Scroll>
                        <CardList />
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default SearchPage;
