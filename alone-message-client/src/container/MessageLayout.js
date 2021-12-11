import React, {Component} from 'react';
import { Container } from 'semantic-ui-react'
import ConvoHeader from '../view/ConvoHeader';
import ConvoBox from '../view/ConvoBox';

export default class MessageLayout extends Component {
    
    render() {
        const convoBoxInfo = {
            chatId: '000101',
            type: 'P',
            profileImage: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
            profileName: 'Rachel',
            user: {
              id: 'U001002',
              img: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
              name: 'Rachel',
            },
            status: [
              'bookmark',
              'bell slash'
            ]
          }
        const msgList = [
            {
              uid: 'U001002',
              msgType: 'T',
              content: 'You added Elliot Fu to the group Coworkers',
              read: true,
              time: '2021-05-20 18:09:50',
            },
            //mymsg
            {
              uid: 'U001001',
              msgType: 'T',
              content: 'You added Elliot',
              read: true,
              time: '2021-05-20 18:09:52',
            },
            {
              uid: 'U001001',
              msgType: 'T',
              content: 'You added Elliot Fu to the group Coworkersddfsfsf',
              read: true,
              time: '2021-05-20 18:09:54',
            }
          ]
        return (
            <Container>
                <ConvoHeader convoBoxInfo={convoBoxInfo} />
                <ConvoBox
                    id="U001001"
                    user={convoBoxInfo.user}
                    msgList={msgList}
                />
            </Container>
        )
    }
}