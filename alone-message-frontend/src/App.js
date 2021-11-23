import MessageLayout from './container/MessageLayout';
import MessageStore from './store/MessageStore';

export default {
  Layout: MessageLayout,
  store: new MessageStore
}

// export default () => (
//   <MessageLayout 
//     userInfo={userInfo}
//     defaults={defaults}
//     />
// )