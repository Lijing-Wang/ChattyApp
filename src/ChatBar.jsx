import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    console.log("Rendering <ChatBar/>");
    
    return (
      <footer className="chatbar" onKeyUp={this.props.onKeyUp}>
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default ChatBar;