import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {currentUser: "Bob",
                  messages: [
                    { id: 1,
                      username: "Bob",
                      content: "Has anyone seen my marbles?"
                    },
                    { id: 2,
                      username: "Anonymous",
                      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
                    }
                  ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {

    const ws = new WebSocket('ws://localhost:3001');
    ws.onopen = () => console.log('Hello Server');

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");    
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages})
    }, 3000);
  }
  

  onKeyUp(event){
    console.log("keyup handler");    
    if (event.key === "Enter") {
      const newcontent = event.target.value;
      const newMessage = {id: 4, newUser: "Bob", content: newcontent};
      const newState = this.state.messages.concat(newMessage);
      console.log(this.state.messages);
      this.setState({messages: newState});
    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
      <Message messageList={this.state.messages}/>
      <ChatBar currentUser={this.state.currentUser} onKeyUp={this.onKeyUp}/>
      </div>

    );
  }
}
export default App;
