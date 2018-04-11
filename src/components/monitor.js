import React, { Component } from 'react';
import Flexbox from './flexbox';

class Monitor extends Component {
  render(){
    return (
    <div className="wrapper">
      <Flexbox />
      <Flexbox />
    </div>
    );
  }
}

export default Monitor;
