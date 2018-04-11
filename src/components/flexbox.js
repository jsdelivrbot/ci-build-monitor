import React, { Component } from 'react';
import Flexcard from './flexcard';

class Flexbox extends Component {
  render(){
    return (
      <div className="flexbox">
        <Flexcard growth="1 0" content="test1"/>
        <Flexcard growth="2 0" content="test2"/>
        <Flexcard growth="3 0" content="test3"/>
        <Flexcard growth="4 0" content="test4"/>
      </div>
    );
  }
}

export default Flexbox;
