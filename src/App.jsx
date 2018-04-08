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
      enterRoom: false
    };
    this.submitUsername = this.submitUsername.bind(this);
    this.enterRoom = this.enterRoom.bind(this);

  }

  submitUsername(e){
    e.preventDefault();
    this.setState({username: e.target.elements[0].value });
  }

  enterRoom(e){
    e.preventDefault();
    this.setState({ enterRoom: true});
  }

  render(){

    if (this.state.enterRoom) {
      return (
        <ChatRoom username={this.state.username}/>
      )
    }

    if (this.state.username) {
      const avatar = `https://api.adorable.io/avatars/153/${this.state.username}`
      return (
        <div className="card container">
          <img className="card-img-top" src={avatar} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{this.state.username}</p>
            </div>
          <button type="button" className="btn btn-success" onClick={this.enterRoom}>Go!</button>
        </div>
      )
    } else {
      return (
        <form onSubmit={this.submitUsername}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username" />
          </div>
          <button type="Ready!" className="btn btn-primary" >Submit</button>
        </form>
      )
    }

  }

}

export default App;