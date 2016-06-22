import React from 'react'
import ReactDOM from 'react-dom'
import IndexPage from './containers/index.js';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/reducers-zhuanlan.js'

let store = createStore(todoApp);

let rootElement = document.getElementById('zh-react')
ReactDOM.render(
  <Provider store={store}>
    <IndexPage />
  </Provider>,
  rootElement
)



