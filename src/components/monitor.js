import React, { Component } from 'react';
import Flexbox from './flexbox';
import Flexcard from './flexcard';
import _ from 'lodash';
import { fetchPipelineViewByName } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BasicLayout from './basic_layout';
import AddRemoveLayout from './add_remove_layout';

class Monitor extends Component {

  componentWillMount() {
    this.props.fetchPipelineViewByName("all");
  }

  renderFlexBoxes(){

    var boxLists = [];
    let i = 0;
    var jobDetails = this.props.pipelines.pipelineview.jobDetails;
    var n = 3;
    var listGroups = _.groupBy(jobDetails, function(element, index){
      return Math.floor(index/n);
    });
    listGroups = _.toArray(listGroups);
    for(var index in listGroups){
      boxLists.push(<Flexbox count={3} content={listGroups[index]}/>);
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
        <div>
          <h3> Loading ... </h3>
          <img src="/static/loading.gif" alt="Smiley face" height="42" width="42">
          </img>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return {pipelines: state.pipelines};
}
export default connect(mapStateToProps, { fetchPipelineViewByName } )(Monitor);
