import _ from 'lodash';
import { FETCH_PIPELINE_VIEWS } from '../actions';
import { FETCH_PIPELINE_VIEW_BY_NAME } from '../actions';


export default function(state = {}, action){
  switch (action.type){
    case FETCH_PIPELINE_VIEW_BY_NAME:
      return { ...state, "pipelineview": action.payload.data }
    case FETCH_PIPELINE_VIEWS:
      return { ...state, "pipelineviews": action.payload.data }
    default:
      return state;
  }
}
