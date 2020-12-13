import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components';
import {GlobalStyle} from './commonness';
import 'antd/dist/antd.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/reducers';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App/>
  </Provider>,
  document.getElementById('root')
);