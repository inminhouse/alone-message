import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import './custom.css'
import {Container, Header, Image, Icon, Grid} from 'semantic-ui-react';
import MessageView from '../view/MessageView';
import MessageViewDefaultImage from './../image/message-view-default.png';

export default class extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          menuWidth: this.setMenuWidth(window.innerWidth),
        }
    
        window.addEventListener('resize', () => {
          this.setState({ menuWidth : this.setMenuWidth(window.innerWidth) })
          this.setMainWidth();
        })
      }
    
      setMenuWidth = innerWidth => innerWidth > 1000 ? 300 : '8em';

      setMainWidth = () => this.setState(
        { mainWidth: document.getElementById('main').clientWidth - document.getElementById('menu').clientWidth }
      );

      render() {
        const { menuWidth, mainWidth } = this.state
        const { info, defaults } = this.props;
        return (
            <Container id="main" style={{padding: '6em 0 2em 0'}}>
                <Grid  id="grid"  columns={2} divided>
                    <Grid.Column id="menu" style={{width: menuWidth}}>
                        col1
                    </Grid.Column>
                    <Grid.Column style={{width: mainWidth}}>
                        { info ? 
                            <MessageView
                                info={info}
                            /> :
                            <div 
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                                >
                                <Header icon style={{margin: '1em'}}>
                                    <Icon name={defaults.icon} />
                                    {defaults.title}
                                </Header>
                                <Image src={MessageViewDefaultImage}/>
                                <Header sub style={{margin: '1em'}}>
                                    {defaults.warning}
                                </Header>
                            </div>
                        }
                    </Grid.Column>
                </Grid>
            </Container>
          )
      }     
}