import React from 'react';

function Userlist (props) {
  let list;
  if (props.userslist.length){
    list = props.userslist.map((user)=>{
      return (
      <li>
          {user} <img className="message-avatar" src={`https://api.adorable.io/avatars/30/${user}`}/>
      </li>
      )
    })
  } else {
    list = null;
  }

  return (
    <div className="col-md-3 userslist-container">
    <p>Current users: </p>
      <ul className="userslist">
        {list}
      </ul>
    </div>
  )
}

export default Userlist;