import React from 'react';

function SysMessage (props){
  console.log('Rendering <SysMessage/>');
  
  return (
    <div className="message system">
      {props.notification}
    </div>
  );
}

export default SysMessage;
