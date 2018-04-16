import React, { Component } from 'react';

class Flexcard extends Component {

  renderLabels(labelState){
    if (labelState == "SUCCESS") {
      return (
        <span className="label label-info">State: Success</span>
      );
    }
    else if (labelState == "FAILURE") {
      return (
        <span className="label label-danger">State: Failure</span>
      );
    }
    else if (labelState == "FAILED") {
      return (
        <span className="label label-danger">State: Failed</span>
      );
    }
    else if (labelState == "FINISHED") {
      return (
        <span className="label label-default">State: Finished</span>
      );
    }
    return (
      <span className="label label-default" >State: {labelState}</span>
    );
  }

  renderRunLabel(labelState){
    if (labelState.search("broken") >= 0){
      return (
        <span className="label label-danger">{labelState}</span>
      );
    }
    else if(labelState=="Disabled") {
      <span className="label label-default" >{labelState}</span>
    }
    else{
      return (
        <span className="label label-info">{labelState}</span>
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
    console.log(this.props.cardContent);
    if(this.props.cardContent.latestRun && this.props.cardContent.latestRun.result == "SUCCESS"){
      return (
        <div className="flexbox bggreen" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
          <div style={{ flex: "1 0"}}>{this.props.cardContent.name}</div>
          <div style={{ flex: this.props.growth}}>
            {this.renderLabels(this.props.cardContent.latestRun.state)}
            {this.renderTime(this.props.cardContent.latestRun.durationInMillis)}
            {this.renderRunLabel(this.props.cardContent.latestRun.runSummary)}
          </div>
        </div>
      );
    }
    else if(this.props.cardContent.latestRun == null){
      return (
        <div className="flexbox bggrey" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
          <div style={{ flex: "1 0"}}>{this.props.cardContent.name}</div>
          <div style={{ flex: this.props.growth}}>
            <span className="label label-default">Disabled</span>
          </div>
        </div>
      );
    }
    else if(this.props.cardContent.latestRun && this.props.cardContent.latestRun.result == "FAILURE"){
      return (
        <div className="flexbox bgred" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
          <div style={{ flex: "1 0"}}>{this.props.cardContent.name}</div>
          <div style={{ flex: this.props.growth}}>
            {this.renderLabels(this.props.cardContent.latestRun.state)}
            {this.renderTime(this.props.cardContent.latestRun.durationInMillis)}
            {this.renderRunLabel(this.props.cardContent.latestRun.runSummary)}
          </div>
        </div>
      );
    }
    else if(this.props.cardContent.latestRun && this.props.cardContent.latestRun.result == "UNKNOWN"){
      return (
        <div className="flexbox bgblue" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
          <div style={{ flex: "1 0"}}>{this.props.cardContent.name}</div>
          <div style={{ flex: this.props.growth}}>
            {this.renderLabels(this.props.cardContent.latestRun.state)}
            {this.renderTime(this.props.cardContent.latestRun.durationInMillis)}
            {this.renderRunLabel(this.props.cardContent.latestRun.runSummary)}
          </div>
        </div>
      );
    }
    return (
      <div className="flexbox bggrey" style={{flex: this.props.growth}} key={this.props.cardContent.name}>
        <div style={{ flex: "1 0"}}>{this.props.cardContent.name}</div>
        <div style={{ flex: this.props.growth}}>
          <span className="label label-default">Disabled</span>
        </div>
      </div>
    );
  }
}

export default Flexcard;
