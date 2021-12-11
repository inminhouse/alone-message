import React, {Component} from 'react';
import { Image, List, Input, Menu, Label, Divider, Feed, Message } from 'semantic-ui-react';
import moment from 'moment';

export default class ConvoBox extends Component {

    convertMsgList = msgList => msgList.reduce((a,b, idx) => {
      
        b.moment = moment(b.time, 'YYYY-MM-DD HH:mm:ss');
    
        const lg = a[a.length - 1];//large group = id/date
    
        if(idx === 0 || lg.id !== b.id || lg.date !== b.moment.format('YYYY년 M월 D일 ddd')) {
          a.push({id: b.id, date: b.moment.format('YYYY년 M월 D일 ddd'), arr: [{time: b.moment.format('A hh:mm'), arr: [b]}]})
        } else {
          
          const sg = lg.arr[lg.arr.length - 1];//small group = time
          const msgT = b.moment.format('A hh:mm');
    
          if(sg.time !== msgT) {
            lg.arr.push({time: msgT, arr: [b]});
          } else {
            sg.arr.push(b)
          }
        }
        return a;
      }, []);
   
    render() {
        const {
            id,
            user,
            msgList,
          } = this.props;
        
        return (
            <Feed 
                id="chat"
                /* style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    overflow: 'auto', 
                    margin: 0, 
                    padding: '1em 0 1em 0'
                }} */
            >
                <Feed.Event>
                    <Feed.Label
                        image={user.img}
                    />
                    <Feed.Content>
                        <Feed.Summary
                                content='You added Elliot Fu to the group Coworkersddfsfsf'
                        />
                        <Feed.Meta
                            content='11:30 pm'
                        />
                    </Feed.Content>
                    
                </Feed.Event>
                <Feed.Event>
                    <Feed.Content
                        style={{
                            float: 'right'
                        }}
                    >
                        <Feed.Summary
                                content='You added Elliot Fu to the group Coworkersddfsfsf'
                        />
                        <Feed.Meta
                            content='11:33 pm'
                        />
                    </Feed.Content>
                </Feed.Event>

            {
                msgList.map((msg, idx) => {
                    <Feed.Event
                        key={'f_e_' + idx}
                    >
                        <Feed.Label
                            key={'f_e_' + idx}
                            image={user.img}
                        />
                        <Feed.Content
                            key={'f_e_c_' + idx}
                        >
                            <Feed.Summary>
                                {msg.time}
                            </Feed.Summary>
                            <Feed.Extra text>
                                {msg.Content}
                            </Feed.Extra>
                        </Feed.Content>
                    </Feed.Event>

                })

            }
          </Feed>
        )
    }

}