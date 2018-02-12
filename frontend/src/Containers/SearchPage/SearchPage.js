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
            <div id="SearchPage">
                {' '}
                <div className="flex justify-between">
                    <InAppSearchBar />
                    <Navigation />
                </div>
                <div>
                    <Scroll>
                        <CardList />
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default SearchPage;
