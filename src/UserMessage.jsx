import React, {Component} from 'react';

function UserMessage (props){
  console.log("Rendering <UserMessage/>");
  return (
    <div className="message">
      <span className="message-username" style={{ color: props.color }}>{props.name} </span>
      <span className="message-content">{props.content}</span>
      {props.imgSrc && <img src={props.imgSrc} className="chat-img" />}
    </div>
  );
}

export default UserMessage;