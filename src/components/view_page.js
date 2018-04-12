import React, { Component } from 'react';
import _ from 'lodash';
import { fetchPipelineViewByName } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BasicLayout from './basic_layout';
import AddRemoveLayout from './add_remove_layout';

class ViewPage extends Component {

  render(){
      return(
        <div>
          <h3> Loading ... </h3>
          <img src="/static/loading.gif" alt="Smiley face" height="42" width="42">
          </img>
        </div>
      );
  }
}

export default ViewPage;
