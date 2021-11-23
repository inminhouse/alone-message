import React, {Component} from 'react';
import MessageHeader from './MessageHeader';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { viewHeight: 500, }
      }
    componentDidMount() {
        // this.setChatHeight()
    }
    // setChatHeight = () => this.setState({ 
    //     viewHeight: 
    //       ['grid',  'top-menu', 
    //       // 'bottom-chat'
    //     ]
    //         .map(x => {
    //           const el = document.getElementById(x);
    //           return el ? el.clientHeight : 0;
    //         })
    //         .reduce((a,b) => a - b) + document.getElementById('bottom-chat').clientHeight
    //   });
    render() {
        const { viewHeight } = this.state;
        const { userInfo } = this.props;
        return (
            <React.Fragment>
                <MessageHeader userInfo={userInfo} />
                <div
                    style={{
                        height: viewHeight, 
                        display: 'grid',
                        // flexDirection: 'column',
                    }}
                >
                    details will be here
                </div>
            </React.Fragment>
        )
    }
}