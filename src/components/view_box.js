import React, { Component } from 'react';
import { fetchPipelineViews } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DetailsModal from './details_modal';


class ViewBox extends Component {
  componentWillMount() {
    this.props.fetchPipelineViews();
  }

  renderViewCards(){
    return _.map(this.props.pipelines.pipelineviews, view => {
      return (
        <div style={{ flex: "1 0"}} key={view.name}>
          <a className="anchor" href={`/buildmonitor/${view.name}`}> {view.name} </a>
        </div>
      );
    })
  }

  render(){

    if (this.props.pipelines.pipelineviews){
      return (
        <div className="page-header header">
          <div className="flexbox" style={{flex: "1 0"}} >
            {this.renderViewCards()}
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="flexbox">
          <div className="flexbox bggrey" style={{flex: "1 0"}} >
            <div style={{ flex: "1 0"}}>Test1 </div>
          </div>
          </div>
      );
    }
  }
}

function mapStateToProps(state){
  return {pipelines: state.pipelines};
}
export default connect(mapStateToProps, { fetchPipelineViews } )(ViewBox);
