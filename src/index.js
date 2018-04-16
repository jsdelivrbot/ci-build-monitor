import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Monitor from './components/monitor';
import ViewPage from './components/view_page';
import BasicLayout from './components/basic_layout';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/viewpage" component={ViewPage} />
        <Route path="/buildmonitor/:id" component={Monitor} />
        <Route path="/" component={Monitor} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.rootcon'));
