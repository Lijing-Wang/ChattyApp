import React from 'react';

//class nav-number has corresponding css attributes predefined in style sheet
function NavBar (props){
  console.log('Rendering <NavBar/>');

  const bgcolor = {
    backgroundColor: props.color
  };

  return (
    <nav className="navbar">
      <p className="navbar-brand">Chatty</p>
      <p className="nav-number">{props.number} users online</p>
    </nav>
  );
}

export default NavBar;
