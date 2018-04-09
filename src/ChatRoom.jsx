import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import NavBar from './NavBar.jsx';
import Userlist from './Userlist.jsx';

class ChatRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.username,
      color: props.color,
      messages: [],
      clientsNum: null,
      clientsList: []
    };
    this.addMessage = this.addMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.ws = new WebSocket('ws://localhost:3001');
  }

  componentDidMount() {

    this.ws.onopen = () => {
      const data = {
        type: 'identifier',
        newUser: this.state.currentUser
      }
      console.log('send username through ws', data);
      this.ws.send(JSON.stringify(data));
    };

    console.log('componentDidMount <ChatRoom />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      const newMessage = {type: 'incomingMessage', id: 0, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages})
    }, 3000);

    this.ws.onmessage =(event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case 'clientsNum':
          this.setState({ clientsNum: data.clientsNum });
          break;
        case 'clientsList':
          this.setState({ clientsList: data.clientsList});
          break;
        default:
          this.setState({ messages: this.state.messages.concat(data) });
      }
    };


  }

  //enter key validation is done on the target component and pass the value up to root components
  addMessage(newContent){
    const newMessage = {type: 'postMessage', username: this.state.currentUser, content: newContent.value};
    newContent.value = '';
    this.ws.send(JSON.stringify(newMessage));
  }

  //For better user experience(going from username input to message input without press enter key)
  //I use onBlur event instead of onKeyUp
  changeUser(event){
    const oldUser = this.state.currentUser;
    const newUser = event.target.value;
    this.setState({currentUser: newUser});
    this.ws.send(JSON.stringify({type: 'postNotification', notification: `${oldUser} changed the name to ${newUser}`}));
    this.ws.send(JSON.stringify({ type: 'identifier', newUser: newUser, oldUser: oldUser}));
  }

  render() {
    console.log('Rendering <ChartRoom/>');
    return (
      <div>
        <NavBar />
        <div className="row">
          <Message messageList={this.state.messages} />
          <Userlist userslist={this.state.clientsList} number={this.state.clientsNum}/>
        </div>
        <ChatBar currentUser={this.state.currentUser}
                addMessage={this.addMessage}
                changeUser={this.changeUser}/>
      </div>

    );
  }
}
export default ChatRoom;
