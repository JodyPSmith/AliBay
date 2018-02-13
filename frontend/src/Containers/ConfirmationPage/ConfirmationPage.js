import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Scroll from '../../Containers/scroll';

class ConfirmationPage extends Component {
    render() {
        const { signedIn, item } = this.props;

        return (
            <div>
                <div className="flex justify-between">
                    <Navigation signedIn={signedIn} />
                </div>
                <div id="ItemPage">
                    <Scroll>
                        <div />
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default ConfirmationPage;
