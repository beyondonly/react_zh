import React from 'react'
import ReactDOM from 'react-dom'
import IndexPage from './containers/index.js';
import Wenzhang from './containers/wenzhang.js';
import Zhuanlane from './containers/zhuanlan.js';
import Topbar from "./components/re-topbar/re-topbar.js";

import { createStore,applyMiddleware  } from 'redux'
import { Provider,connect} from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import logger from 'redux-logger'
import todoApp from './reducers/reducers-zhuanlan.js'
import thunk from 'redux-thunk'


import { Router, Route, Link,hashHistory,IndexRoute } from 'react-router'


var getAllList = require("./actions/action-zhuanlan.js")

import css from "./iframe/public/reset.css"

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

let store = createStore(
  todoApp,
  applyMiddleware(...middleware)
);
store.dispatch(getAllList())

let rootElement = document.getElementById('zh-react')

let App = React.createClass({
	render: function() {
		return (
			<div>
				<Topbar />
				{this.props.children}
			</div>
		)
	}
})
ReactDOM.render(
  <Provider store={store}>
 	<div>
 	  <Router history={hashHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={IndexPage} />
	     <Route path="users" component={Zhuanlane} />
		  <Route path="zhuanlan" component={Wenzhang} />
	    </Route>
	  </Router>
	</div>
  </Provider>,
  rootElement
)

 


 




