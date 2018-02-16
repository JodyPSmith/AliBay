import React, { Component } from 'react';
import CardList from '../../components/Card/CardList';
//import Scroll from '../scroll';
import './SearchPage.css';
import { items } from '../../components/Card/fakeData';
class SearchPage extends Component {
    render() {
        //this prop is for displaying the image clicked
        //TODO: make the search page display items based on search query.
        const { setItemPage } = this.props;
        return (
            <div id="SearchPage" className="">
                {console.log("this is my search array " , this.props.searchResult)}
                {console.log("this is items from fake data ", items)}
                {/* <Scroll height="71vh"> */}
                    <CardList searchResult={this.props.searchResult} items={items} setItemPage={setItemPage} />
                {/* </Scroll> */}
            </div>
        );
    }
}

export default SearchPage;
