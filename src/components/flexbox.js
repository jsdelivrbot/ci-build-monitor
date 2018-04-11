import React, { Component } from 'react';
import Flexcard from './flexcard';

class Flexbox extends Component {
  render(){
    return (
      <div className="flexbox">
        <Flexcard />
        <Flexcard />
        <Flexcard />
        <Flexcard />
      </div>
    );
  }
}

export default Flexbox;
