import React, { Component } from 'react';
import Flexbox from './flexbox';
import Flexcard from './flexcard';
import _ from 'lodash';
import { fetchPipelineViewByName } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BasicLayout from './basic_layout';
import ViewBox from './view_box';
import AddRemoveLayout from './add_remove_layout';

class Monitor extends Component {

  componentWillMount() {
    console.log("these are params passed ");
    console.log(this.props);
    if (this.props.match.params.id){
      this.props.fetchPipelineViewByName(this.props.match.params.id);
    }
    else{
      this.props.fetchPipelineViewByName("all");
    }

  }

  renderFlexBoxes(){

    var boxLists = [];
    boxLists.push(
      <ViewBox key="99999"/>
    );
    let i = 0;
    var jobDetails = this.props.pipelines.pipelineview.jobDetails;
    console.log(jobDetails.length);
    var n = 3;
    var listGroups = _.groupBy(jobDetails, function(element, index){
      return Math.floor(index/n);
    });
    listGroups = _.toArray(listGroups);
    for(var index in listGroups){
      boxLists.push(<Flexbox count={3} content={listGroups[index]} key={index}/>);
      i+=1
    }
    return boxLists;

  }

  render(){

    if (this.props.pipelines.pipelineview){
      return (
        <div className="overlay">
          <div className="wrapper">
            {this.renderFlexBoxes()}
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="overlay spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>

      );
    }
  }
}

function mapStateToProps(state){
  return {pipelines: state.pipelines};
}
export default connect(mapStateToProps, { fetchPipelineViewByName } )(Monitor);
