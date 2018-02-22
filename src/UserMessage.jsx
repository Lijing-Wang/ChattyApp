import React, {Component} from 'react';

class UserMessage extends Component {
  render() {
    console.log("Rendering <UserMessage/>");
    console.log(this.props.imgSrc);


    return (
        <div className="message">
          <span className="message-username" style={{color: this.props.color}}>{this.props.name} </span>
          <span className="message-content">{this.props.content}</span>
          {this.props.imgSrc && <img src={this.props.imgSrc} className="chat-img"/>}
        </div>
    );
  }
}
export default UserMessage;