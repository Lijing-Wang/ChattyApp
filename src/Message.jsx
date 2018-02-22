import React, {Component} from 'react';
import SysMessage from './SysMessage.jsx';
import UserMessage from './UserMessage.jsx';


class Message extends Component {
  render() {
    console.log(this.props.messageList);
    const mssages = this.props.messageList.map((message) => {
      switch(message.type) {
        case "incomingMessage": 
          return <UserMessage key={message.id} name={message.username} content={message.content}/>;
          break;
        case "incomingNotification": 
          return <SysMessage notification={message.notification}/>;
          break;
        default:
          throw new Error("unknown message type", message);
      }
      //return <UserMessage key={message.id} name={message.username} content={message.content}/>
    });
    console.log("Rendering <Message/>");    
    return (
      <main className="messages">
      {mssages}

      </main>
    );
  }
}
export default Message;
