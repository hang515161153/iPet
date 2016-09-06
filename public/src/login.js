import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import Head from './components/index_components/index_head';
import userLoginMiddleware from './middlewares/userLoginMiddleware';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import user_login from './reducers/index';
import LoginView from './container/login';
import userSignInMiddleware from './middlewares/userSignInMiddleware';
import createLogger from 'redux-logger';

const store = createStore(
    user_login,
    applyMiddleware(createLogger(),userLoginMiddleware,userSignInMiddleware)

);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <div>
        <Head />
        <LoginView />
      </div>
    </Provider>,
document.getElementById('app')
);
