import React, {Component} from 'react';

class SysMessage extends Component {
  render() {
    console.log("Rendering <SysMessage/>");
    return (
        <div className="message system">
          {this.props.notification}
        </div>
    );
  }
}
export default SysMessage;
