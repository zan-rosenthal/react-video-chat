import React, { Component } from 'react';

class MessageEntryBox extends Component {
  handleChange(e){
    this.props.onChange(e.target.value);
  }

  handleKeyPress(e){
    if(ev.which === 13) {
      this.props.onSubmit();
      e.preventDefault();
    }
  }

  render(){
    return (
      <div className="message-input">
        <textarea
          name="message"
          value = {this.props.value}
          onChange={this.handleChange.bind(this)}
          onKeyPress = {this.handleKeyPress.bind(this)}
        ></textarea>
      </div>
    )
  }
};

export default MessageEntryBox;
