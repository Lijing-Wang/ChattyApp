import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    console.log("Rendering <NavBar/>");
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p className="nav-number">{this.props.number} users online</p>
      </nav>
    );
  }
}
export default NavBar;
