import React from 'react';

//if there is a effective/valid img link, show img
//otherwise, skip that
function UserMessage (props){
  console.log('Rendering <UserMessage/>');

  const image = props.imgSrc && <div><img src={props.imgSrc} className="chat-img" /></div>;

  return (
    <div className="message">
      <img className="message-avatar" src={props.avatar} />
      <span className="message-username" style={{ color: props.color }}>{props.name} </span>
      <span className="message-content">{props.content}
        {image}
      </span>

    </div>
  );
}

export default UserMessage;