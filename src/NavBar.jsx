import React from 'react';

//class nav-number has corresponding css attributes predefined in style sheet
function NavBar (props){
  console.log('Rendering <NavBar/>');

  const bgcolor = {
    backgroundColor: props.color
  };

  return (
    <nav className="navbar" style={bgcolor}>
      <a href="/" className="navbar-brand">Chatty</a>
      <p className="nav-number">{props.number} users online</p>
    </nav>
  );
}

export default NavBar;
