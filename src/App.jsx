import React, { Component } from 'react';
import ChatRoom from './ChatRoom.jsx';

//generate avatar and enter chatroom
//if no username, ask for input in a form and generator avatar
//if username exists, show avatar, go button to enter room, pass username as props
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      color: null,
      enterRoom: false
    };
    this.submitUsername = this.submitUsername.bind(this);
    this.enterRoom = this.enterRoom.bind(this);
    this.generateColor = this.generateColor.bind(this);
  }

  submitUsername(e){
    e.preventDefault();
    this.setState({
      username: e.target.elements[0].value,
      color: this.generateColor()
    });
  }

  enterRoom(e){
    e.preventDefault();
    this.setState({ enterRoom: true});
  }

  generateColor(){
    const elements = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
      let index = Math.floor(Math.random() * 16);
      color += elements[index];
    }
    return color;
  }

  render(){
    //if ready to enterRoom, redirect to chatroom component
    if (this.state.enterRoom) {
      return (
        <ChatRoom username={this.state.username} color={this.state.color}/>
      )
    }

    if (this.state.username) {
      const avatar = `https://api.adorable.io/avatars/153/${this.state.username}`
      return (
        <div className="card">
          <img className="card-img-top" src={avatar} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text"> Join the chat room as {this.state.username}</p>
            </div>
          <button type="button" className="btn btn-info" onClick={this.enterRoom}>Go!</button>
        </div>
      )
    } else {
      return (
        <div className="container">
          <form onSubmit={this.submitUsername}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="usernameHelp"
                    placeholder="Enter username" />
            </div>
            <button type="submit" className="btn btn-secondary" >Ready!</button>
          </form>
        </div>
      )
    }

  }

}

export default App;