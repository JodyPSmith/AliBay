import React, { Component } from 'react';
import Scroll from '../../Containers/scroll';
import { Link } from 'react-router-dom';

class ItemPage extends Component {
    constructor() {
        super();
        this.state = {
            image: ''
        };
    }
    componentDidMount() {
        this.setState({ image: this.props.item.image[0] });
        console.log(this.props.item);
    }
    render() {
        //imports Item from the App.js state
        const { item } = this.props;
        return (
            <div id="ItemPage">
                <Scroll height="80vh">
                    <div className="flex ma5">
                        <div className="mr5 w-25">
                            <img
                                style={{
                                    width: 'auto',
                                    height: '300px'
                                }}
                                src={this.state.image}
                                alt="product "
                            />
                            <div className="flex flex-wrap">
                                {/* Here we do a map of all the images available and display them */}
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
                                                alt="product"
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
                        <div className="w-75">
                            <div className="flex justify-between ">
                                <p className="f1 ma0 mb3">{item.title}</p>
                                <Link to="/confirm">
                                    <button
                                        className="dim pointer white br1 shadow-5"
                                        style={{
                                            background: '#F6841F',
                                            border: 'none',
                                            width: '3vw',
                                            height: '5vh',
                                            minHeight: '20px',
                                            minWidth: '60px'
                                        }}
                                    >
                                        Buy
                                    </button>
                                </Link>
                            </div>
                            <p className="f3 ma0">${item.price}</p>
                            <p className="f4">{item.description}</p>
                        </div>
                    </div>
                </Scroll>
            </div>
        );
    }
}
export default ItemPage;
