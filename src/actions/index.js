export const FETCH_PIPELINE_VIEWS = 'fetch_pipeline_views';

export const FETCH_PIPELINE_VIEW_BY_NAME = 'fetch_pipeline_view_by_name';

const HEADERS = {}
var CONFIG = require("../constants/config")
import axios from 'axios';

export function fetchPipelineViewByName(name) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/views/${name}`);
  return {
    type: FETCH_PIPELINE_VIEW_BY_NAME,
    payload: request
  };
}

export function fetchPipelineViews() {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/views`);

  return {
    type: FETCH_PIPELINE_VIEWS,
    payload: request
  };
}
