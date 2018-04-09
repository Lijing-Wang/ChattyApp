import React from 'react';

function Userlist (props) {
  let list;
  if (props.userslist.length){
    list = props.userslist.map((user)=>{
      return (
        <li style={{color: user.color}} >
          <img className="message-avatar"
                src={`https://api.adorable.io/avatars/30/${user.name}`}/>
          {user.name}
      </li>
      )
    })
  } else {
    list = null;
  }

  return (
    <div className="col-md-3 userslist-container">
    <p>Currently, {props.number} user in the room:</p>
      <ul className="userslist">
        {list}
      </ul>
    </div>
  )
}

export default Userlist;