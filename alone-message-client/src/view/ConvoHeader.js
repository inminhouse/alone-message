import React, {Component} from 'react';
import { Image, Menu, Dropdown, Header } from 'semantic-ui-react';

export default class ConvoHeader extends Component {

  handleItemClick = (e, data) => {
    console.log(e, data)
  }
  
  render() {
    const {
      convoBoxInfo
      } = this.props;
    
    return (
      <Menu 
        id="top-menu" 
        pointing 
        secondary 
        /* style={{
          height: '6em', 
          margin: 0
        }} */
      >
        {/* 프로필 사진, 프로필 이름 */}
        <Menu.Item>
          <Image
            circular
            size='tiny'
            spaced
            src={convoBoxInfo.profileImage}
            />
        </Menu.Item>
        <Menu.Item>
          <Header size='large'>{convoBoxInfo.profileName}</Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          {/* 북마크 버튼 */}
          <Menu.Item
            icon={{
              name: 'star',
              size: 'big',
              color: convoBoxInfo.status.includes('bookmark') ? 'yellow' : 'grey'
            }}
            onClick={this.handleItemClick}
          />
          {/* 영상통화 버튼 */}
          <Menu.Item
            icon={{
              name: 'video',
              size: 'big'
            }}
            onClick={this.handleItemClick}
          />
          
          <Menu.Item>
            {/* more 버튼 */}
            <Dropdown
              icon={{
                name: 'ellipsis horizontal',
                size: 'big'
              }}
            >
              <Dropdown.Menu>
                <Dropdown.Item 
                  icon='dont' 
                  text='차단' 
                  onClick={this.handleItemClick}
                />
                <Dropdown.Item 
                  icon='save' 
                  text='텍스트로 저장' 
                  onClick={this.handleItemClick}
                />
                <Dropdown.Item 
                  icon='remove' 
                  text='대화 삭제' 
                  onClick={this.handleItemClick}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}