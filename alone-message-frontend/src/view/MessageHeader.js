import React, {Component} from 'react';
import {Icon, Image, Menu} from 'semantic-ui-react';
import squareImage from './../image/square.png';

// Header
export default class extends Component {
    render() {
        const {
            userInfo,
          } = this.props;
        return (
            // Menu
            <Menu id="top-menu" pointing secondary style={{height: '6em', margin: 0}}>
                <Menu.Item>
                    <Image 
                        avatar 
                        src={squareImage}
                        style={{width: '4em', height: '100%'}} />
                    <span style={{paddingLeft: '1ex', fontWeight: 700, fontSize: '3ex'}}>
                        {userInfo.name}
                    </span>
                </Menu.Item>
                <Menu.Menu position='right' style={{alignSelf: 'center'}}>
                    <Menu.Item 
                        onClick={this.handleItemClick}
                        style={{padding: '.5em'}}>
                        <Icon 
                            name='star' 
                            size="large" 
                            // color={chatInfo.status.find(x => x === 'bookmark') ? 'yellow' : 'grey'} 
                            style={{margin: 0}} />
                    </Menu.Item>
                    <Menu.Item 
                        onClick={this.handleItemClick}
                        style={{padding: '.5em'}}>
                        <Icon 
                            // name={chatInfo.status.find(x => x === 'bell slash') || 'bell'}
                            size="large" 
                            color="grey" 
                            style={{margin: 0}} />
                    </Menu.Item>
                    <Menu.Item
                        onClick={this.handleItemClick}
                        style={{padding: '.5em'}}>
                        <Icon 
                        name='ellipsis horizontal' 
                        size="large" 
                        color="grey" 
                        style={{margin: 0}} />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}