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
      color: null,
      clientsList: [],
      clientsNum: null,
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.ws = new WebSocket('ws://localhost:3001');
  }

  componentDidMount() {
    console.log('componentDidMount <ChatRoom />');

    //once websocket is connected, send user name to server for identifying
    //set up default name, could be change by other event
    this.ws.onopen = () => {
      const data = {
        type: 'identifier',
        newUser: this.state.currentUser
      }
      this.ws.send(JSON.stringify(data));
    };

    //send + store greeting from admin
    setTimeout(() => {
      // console.log('Simulating incoming message');
      const newMessage = {type: 'incomingMessage', id: 0, username: 'Admin', content: 'Hello there, welcome!'};
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages})
    }, 3000);

    //when receive a message from server
    this.ws.onmessage =(event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case 'clientsNum':
          this.setState({ clientsNum: data.clientsNum });
          break;
        case 'clientsList':
          this.setState({ clientsList: data.clientsList});
          break;
        //message type is imcomingMessage/incomingNotifications
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

  //For better user experience, used onBlur event instead of onKeyUp
  changeUser(event){
    const oldUser = this.state.currentUser;
    const newUser = event.target.value;
    this.setState({currentUser: newUser});
    this.ws.send(JSON.stringify({type: 'postNotification', notification: `${oldUser} changed the name to ${newUser}`}));
    this.ws.send(JSON.stringify({ type: 'identifier', newUser: newUser}));
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
