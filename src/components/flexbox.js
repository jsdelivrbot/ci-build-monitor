import React, { Component } from 'react';
import Flexcard from './flexcard';

class Flexbox extends Component {
  renderFlexCards(){
    return _.map(this.props.content, card  => {
      return(
        <Flexcard growth="1 0" cardContent={card}/>
      )
      }
    );
  }
  render(){

    return(
        <div className="flexbox">
          {this.renderFlexCards()}
        </div>
    )

  }
}

export default Flexbox;
