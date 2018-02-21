import React, {Component} from 'react';

class SysMessage extends Component {
  render() {
    console.log("Rendering <SysMessage/>");
    return (
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
    );
  }
}
export default SysMessage;
