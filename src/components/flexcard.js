import React, { Component } from 'react';

class Flexcard extends Component {
  render(){
    return (
        <div style={{flex: this.props.growth}}>{this.props.content}</div>
    );
  }
}

export default Flexcard;
