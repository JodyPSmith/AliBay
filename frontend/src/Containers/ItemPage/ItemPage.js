import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Scroll from '../../Containers/scroll';
import './itemPage.css';
class ItemPage extends Component {
    render() {
        //imports Item from the App.js state
        const { signedIn, item } = this.props;
        return (
            <div>
                <div className="flex justify-between ">
                    <Navigation signedIn={signedIn} />
                </div>
                <div id="ItemPage">
                    <Scroll height="80vh">
                        <div className="flex ma5">
                            <div>
                                {' '}
                                <img
                                    style={{
                                        width: '30vw',
                                        minWidth: '250px',
                                        height: 'auto'
                                    }}
                                    src={item.image}
                                    alt="product "
                                />
                            </div>
                            <div>
                                <p className="f1 ma0 mb1">{item.name}</p>
                                <p className="f3 ma0">{item.price}</p>
                                <p className="f4">{item.desc}</p>
                            </div>
                        </div>
                    </Scroll>
                </div>
            </div>
        );
    }
}
export default ItemPage;
