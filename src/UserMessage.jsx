import React from 'react';

//if there is a effective/valid img link, show img
//otherwise, skip that
function UserMessage (props){
  console.log('Rendering <UserMessage/>');
  return (
    <div className="message">
      <img className="message-avatar" src={props.avatar} />
      <span className="message-username" style={{ color: props.color }}>{props.name} </span>
      <span className="message-content">{props.content}
        {props.imgSrc && <div><img src={props.imgSrc} className="chat-img" /></div>}
      </span>

    </div>
  );
}

export default UserMessage;