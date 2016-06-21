import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers'
import { index, wenzhang, zhuanlan} from './containers'

require("./iframe/public/reset.css");
var IndexPage = require("./containers/index.js")
var Wenzhang = require("./containers/wenzhang.js")
var Zhuanlan = require("./containers/zhuanlan.js")
var Topbar = require("./components/re-topbar/re-topbar.js")

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(reducer)
const history = syncHistoryWithStore(browserHistory, store)

var App = React.createClass({
	render: function() {
		return (
		    <div className="AppBox">
				<Topbar />
				{this.props.children}
			</div>
		)
	}
})

ReactDOM.render((
 <Router history={hashHistory}>
	<Route  path="/" component={App} >
	    <IndexRoute component={IndexPage}/>
		<Route path="index" component={ IndexPage } />
		<Route path="users" component={ Wenzhang } />
		<Route path="zhuanlan" component={ Zhuanlan }/>
	</Route>
 </Router>
), document.getElementById('zh-react'));
