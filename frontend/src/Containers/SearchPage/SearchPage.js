import React, { Component } from 'react';
import CardList from '../../components/Card/CardList';
import Navigation from '../../components/Navigation/Navigation';
import Scroll from '../scroll';
import './SearchPage.css';
import { items } from '../../components/Card/fakeData';
class SearchPage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { route, signedIn, setItemPage, click } = this.props;
        return (
            <div>
                {' '}
                <div className="flex justify-between">
                    {/* this prop will check if the state in the parent container, isSignedIn, is true or false
                        see documentaion in Navigation component*/}
                    <Navigation
                        click={click}
                        route={route}
                        signedIn={signedIn}
                    />
                </div>
                <div id="SearchPage" className="mt5">
                    <Scroll height="71vh">
                        <CardList items={items} setItemPage={setItemPage} />
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default SearchPage;
