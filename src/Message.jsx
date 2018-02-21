import React, {Component} from 'react';
import SysMessage from './SysMessage.jsx';
import UserMessage from './UserMessage.jsx';


class Message extends Component {
  render() {
    console.log(this.props.messageList);
    const UserMessages = this.props.messageList.map((message) => {
      return <UserMessage key={message.id} name={message.username} content={message.content}/>
    });
    console.log("Rendering <Message/>");    
    return (
      <main className="messages">
      {UserMessages}
      <SysMessage />
      </main>
    );
  }
}
export default Message;
