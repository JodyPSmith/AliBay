import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CardList from "../../components/Card/CardList";
//import Scroll from '../scroll';
import "./SearchPage.css";
// import { items } from '../../components/Card/fakeData';
class SearchPage extends Component {
  render() {
    //this prop is for displaying the image clicked
    //TODO: make the search page display items based on search query.
    const { setItemPage } = this.props;
    return (
      <div id="SearchPage" className="">
        <h1>Results for "{this.props.match.params.searchTerm.split("=")}"</h1>
        <CardList items={this.props.searchResult} setItemPage={setItemPage} />
        {/* </Scroll> */}
      </div>
    );
  }
}

export default withRouter(SearchPage);
