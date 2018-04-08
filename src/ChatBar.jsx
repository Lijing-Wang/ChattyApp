import React, {Component} from 'react';

function ChatBar(props) {
  const onKeyUp = (event) => {
    if (event.key === 'Enter') {
      const newcontent = event.target;
      props.addMessage(newcontent);
    }
  };
  console.log("Rendering <ChatBar/>");

  const bgcolor = {
    backgroundColor: props.color
  };

  const avatar = `https://api.adorable.io/avatars/30/${props.currentUser}`;

  return (
    <footer className="chatbar">
      <img className="chatbar-avatar" src={avatar} />
      <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={props.currentUser} onBlur={props.changeUser} />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={onKeyUp} />
    </footer>
  );
}

export default ChatBar;