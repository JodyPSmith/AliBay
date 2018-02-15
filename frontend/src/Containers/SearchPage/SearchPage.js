import React, { Component } from 'react';
import CardList from '../../components/Card/CardList';
import Scroll from '../scroll';
import './SearchPage.css';
import { items } from '../../components/Card/fakeData';
class SearchPage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { setItemPage } = this.props;
        return (
            <div id="SearchPage" className="">
                <Scroll height="71vh">
                    <CardList items={items} setItemPage={setItemPage} />
                </Scroll>
            </div>
        );
    }
}

export default SearchPage;
