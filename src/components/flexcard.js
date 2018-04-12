import React, { Component } from 'react';

class Flexcard extends Component {
  render(){

    return (
      <div className="flexbox" style={{flex: this.props.growth}}>
        <div style={{ flex: "2 0"}}>{this.props.cardContent.name}</div>
        <div style={{ flex: this.props.growth}}>
          <button className="btn btn-info btn-sm"> This is a button </button>
          <button className="btn btn-warning btn-sm"> This is a button </button>
        </div>
        <div style={{ flex: this.props.growth}}>
          <button className="btn btn-warning btn-sm"> This is a button </button>
        </div>
        <div style={{ flex: this.props.growth}}>
          <button className="btn btn-danger btn-sm"> This is a button </button>
        </div>
      </div>
    );
  }
}

export default Flexcard;
