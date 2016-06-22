import React from 'react'
import ReactDOM from 'react-dom'
import IndexPage from './containers/index.js';

import { createStore,applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import todoApp from './reducers/reducers-zhuanlan.js'
import thunk from 'redux-thunk'

var getAllList = require("./actions/action-zhuanlan.js")

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

let store = createStore(
  todoApp,
  applyMiddleware(...middleware)
);

store.dispatch(getAllList())


let rootElement = document.getElementById('zh-react')
ReactDOM.render(
  <Provider store={store}>
    <IndexPage />
  </Provider>,
  rootElement
)



