/*引入路由*/
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var hashHistory = require('react-router').hashHistory
var IndexRoute = require('react-router').IndexRoute;

var React = require("react");
var ReactDOM = require('react-dom');

require("./iframe/public/reset.css");

var IndexPage = require("./containers/index.jsx")
var Wenzhang = require("./containers/wenzhang.jsx")
var Zhuanlan = require("./containers/zhuanlan.jsx")
var Topbar = require("./components/re-topbar/re-topbar.jsx")


var App = React.createClass({
	render: function() {
		return(
			<div className = "AppBox">
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
