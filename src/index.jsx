import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components';
import {GlobalStyle} from './commonness';
import 'antd/dist/antd.css';

import { configureStore } from "@reduxjs/toolkit";
import {Provider} from 'react-redux';
import rootReducer from './store/reducers';

const store = configureStore({reducer: rootReducer});

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App/>
  </Provider>,
  document.getElementById('root')
);