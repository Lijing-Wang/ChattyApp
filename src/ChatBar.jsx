import React, {Component} from 'react';

class ChatBar extends Component {
  onKeyUp = (event) => {
    if (event.key === "Enter") {
      const newcontent = event.target;
      this.props.addMessage(newcontent);
    }
  };

  render() {
    console.log("Rendering <ChatBar/>");
    

    return (
      <footer className="chatbar" >
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser} onBlur={this.props.changeUser}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={this.onKeyUp}/>
      </footer>
    );
  }

  
}
export default ChatBar;