import React from 'react';
import SysMessage from './SysMessage.jsx';
import UserMessage from './UserMessage.jsx';

function Message (props){
  //loop through all messages
  //to differentiate system message and user message by checking message type
  const mssages = props.messageList.map((message) => {
    switch (message.type) {
      case 'incomingMessage':
        return <UserMessage key={message.id}
                            name={message.username}
                            avatar={`https://api.adorable.io/avatars/30/${message.username}`}
                            content={message.content}
                            color={message.color}
                            imgSrc={message.imgSrc} />;
        break;
      case 'incomingNotification':
        return <SysMessage notification={message.notification} />;
        break;
      default:
        throw new Error('unknown message type', message);
    }
  });
  console.log('Rendering <Message/>');
  return (
    <main className='messages col-md-9'>
      {mssages}
    </main>
  );
}

export default Message;
