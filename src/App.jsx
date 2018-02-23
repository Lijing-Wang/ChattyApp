import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {currentUser: "Anomynouse1", messages: [], clientsNum: []};
    this.addMessage = this.addMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.ws = new WebSocket('ws://localhost:3001');
  }

  componentDidMount() {

    this.ws.onopen = () => console.log('Hello Server');

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {type: "incomingMessage", id: 0, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages})
    }, 3000);

    this.ws.onmessage =(event) => {
      const data = JSON.parse(event.data);
      if (data.type === "clientsNum") {
        this.setState({clientsNum: data.clientsNum});
      } else {
        this.setState({messages: this.state.messages.concat(data)});
      }
    };

  }

  addMessage(newContent){
    const newMessage = {type: "postMessage", username: this.state.currentUser, content: newContent.value};
    newContent.value = '';
    this.ws.send(JSON.stringify(newMessage));
  }

  changeUser(event){
    const oldUser = this.state.currentUser;
    const newUser = event.target.value;
    this.setState({currentUser: newUser});
    this.ws.send(JSON.stringify({type: "postNotification", notification: `${oldUser} changed the name to ${newUser}`}));
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
      <NavBar number={this.state.clientsNum}/>
      <Message messageList={this.state.messages} />
      <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} changeUser={this.changeUser}/>
      </div>

    );
  }
}
export default App;
