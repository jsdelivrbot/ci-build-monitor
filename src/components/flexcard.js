import React, { Component } from 'react';
import DetailsModal from './details_modal';
class Flexcard extends Component {

  renderLabels(labelState){
    if (labelState == "SUCCESS") {
      return (
        <button type="button" className="btn btn-info btn-sm">State: Success </button>
      );
    }
    else if (labelState == "FAILURE") {
      return (
        <button type="button" className="btn btn-danger btn-sm">State: Failed</button>
      );
    }
    else if (labelState == "FAILED") {
      return (
        <button type="button" className="btn btn-danger btn-sm">State: Failed</button>
      );
    }
    else if (labelState == "FINISHED") {
      return (
        <button type="button" className="btn btn-info btn-sm">State: Finished</button>
      );
    }
    return (
      <button type="button" className="btn btn-default btn-sm">State: {labelState}</button>
    );
  }

  renderRunLabel(runLabel){
    //console.log(runLabel);
    if (runLabel == null){
      return (
        <button type="button" className="btn btn-info btn-sm">?</button>
      );
    }
    if (runLabel.search("broken") >= 0){
      return (
        <button type="button" className="btn btn-danger btn-sm">{runLabel}</button>
      );
    }
    else if(runLabel=="Disabled") {
      <span className="label label-default">disabled</span>
    }
    else{
      return (
        <button type="button" className="btn btn-info btn-sm">{runLabel}</button>

      );
    }
  }

  renderTime(duration){
    var date = new Date(duration);
    var str = '';
    let hrs = date.getUTCHours();
    let mins = date.getUTCMinutes()
    let secs = date.getUTCSeconds()
    let mills = date.getUTCMilliseconds()
    if (hrs > 0){
      str += hrs + "hr ";
    }
    if (mins > 0){
      str += mins + "m ";
    }
    if (secs > 0){
      str += secs + "s ";
    }
    else if (mills > 0){
      str += mills + "ms ";
    }
    return (
      <span className="label label-default">ETA: {str}</span>
    );
  }

  render(){
    //console.log(this.props.cardContent);
    if(this.props.cardContent.latestRun && this.props.cardContent.latestRun.result == "SUCCESS"){
      return (
        <div className="flexbox bggreen" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
          <div style={{ flex: "1 0 10%"}}>
            <DetailsModal pipelinename={this.props.cardContent.name} modalContent={this.props.cardContent}>
            </DetailsModal>
          </div>
          <div style={{ flex: this.props.growth}}>
            {this.renderLabels(this.props.cardContent.latestRun.result)}
            {this.renderTime(this.props.cardContent.latestRun.durationInMillis)}
          </div>
          <div style={{ flex: this.props.growth}}>
            {this.renderRunLabel(this.props.cardContent.latestRun.runSummary)}
          </div>
        </div>
      );
    }
    else if(this.props.cardContent.latestRun == null){
      return (
        <div className="flexbox bggrey" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
          <div style={{ flex: "1 0 10%"}}>
            <DetailsModal pipelinename={this.props.cardContent.name} modalContent={this.props.cardContent}>
            </DetailsModal>
          </div>
          <div style={{ flex: this.props.growth}}>
            <span className="label label-default">disabled</span>
          </div>
        </div>
      );
    }
    else if(this.props.cardContent.latestRun && this.props.cardContent.latestRun.result == "FAILURE"){
      return (
        <div className="flexbox bgred" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
          <div style={{ flex: "1 0 10%"}}>
            <DetailsModal pipelinename={this.props.cardContent.name} modalContent={this.props.cardContent}>
            </DetailsModal>
          </div>
          <div style={{ flex: this.props.growth}}>
            {this.renderLabels(this.props.cardContent.latestRun.result)}
            {this.renderTime(this.props.cardContent.latestRun.durationInMillis)}
            {this.renderRunLabel(this.props.cardContent.latestRun.runSummary)}
          </div>
        </div>
      );
    }
    else if(this.props.cardContent.latestRun && this.props.cardContent.latestRun.result == "UNKNOWN"){
      return (
        <div className="flexbox bgblue" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
          <div style={{ flex: "1 0 10%"}}>
            <DetailsModal pipelinename={this.props.cardContent.name} modalContent={this.props.cardContent}>
            </DetailsModal>
          </div>
          <div style={{ flex: this.props.growth}}>
            {this.renderLabels(this.props.cardContent.latestRun.result)}
            {this.renderTime(this.props.cardContent.latestRun.durationInMillis)}
            {this.renderRunLabel(this.props.cardContent.latestRun.runSummary)}
          </div>
        </div>
      );
    }
    return (
      <div className="flexbox bggrey" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
        <div style={{ flex: "1 0 10%"}}>
          <DetailsModal pipelinename={this.props.cardContent.name} modalContent={this.props.cardContent}>
          </DetailsModal>
        </div>
        <div style={{ flex: this.props.growth}}>
          <span className="label label-default">disabled</span>
        </div>
      </div>
    );
  }
}

export default Flexcard;
