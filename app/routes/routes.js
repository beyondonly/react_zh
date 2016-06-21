import { Route } from 'react-router';
import React from 'react'
var IndexPage = require("../containers/index.js")
var Wenzhang = require("../containers/wenzhang.js")
var Zhuanlan = require("../containers/zhuanlan.js")
var Topbar = require("../components/re-topbar/re-topbar.js")
require("../iframe/public/reset.css");

const routes = (
	<Route  path="/" component={App} >
		<Route path="index" component={ IndexPage } />
		<Route path="users" component={ Wenzhang } />
		<Route path="zhuanlan" component={ Zhuanlan }/>
	</Route>
)

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

export default routes