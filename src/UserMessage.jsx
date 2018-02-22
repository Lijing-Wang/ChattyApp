import React, {Component} from 'react';

class UserMessage extends Component {
  render() {
    console.log("Rendering <UserMessage/>");

    return (
        <div className="message">
          <span className="message-username" style={{color: this.props.color}}>{this.props.name} </span>
          <span className="message-content">{this.props.content}</span>
        </div>
    );
  }
}
export default UserMessage;