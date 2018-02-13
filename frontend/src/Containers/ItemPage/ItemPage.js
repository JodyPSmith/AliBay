import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Scroll from '../../Containers/scroll';
import './itemPage.css';
class ItemPage extends Component {
    constructor() {
        super();
        this.state = {
            image: ''
        };
    }
    componentDidMount() {
        this.setState({ image: this.props.item.image[0] });
    }
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
                            <div className="mr5">
                                <img
                                    style={{
                                        width: 'auto',
                                        height: '300px'
                                    }}
                                    src={this.state.image}
                                    alt="product "
                                />
                                <div className="flex flex-wrap">
                                    {item.image.map((item, index) => {
                                        return (
                                            <div
                                                className="ma1"
                                                style={{
                                                    maxWidth: '100px',
                                                    maxHeight: '150px '
                                                }}
                                            >
                                                <img
                                                    onClick={() =>
                                                        this.setState({
                                                            image: item
                                                        })
                                                    }
                                                    className="shadow-1 ma1 mb0 dim br3 pointer"
                                                    src={item}
                                                    key={`${index}`}
                                                    style={{
                                                        height: '100px',
                                                        width: 'auto'
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <p className="f1 ma0 mb1">{item.name}</p>
                                    <button
                                        className="dim pointer white br1 shadow-5"
                                        style={{
                                            background: '#F6841F',
                                            border: 'none',
                                            width: '3vw',
                                            height: '5vh'
                                        }}
                                    >
                                        Buy
                                    </button>
                                </div>
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
