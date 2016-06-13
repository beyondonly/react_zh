/*引入路由*/
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var browserHistory = require('react-router').browserHistory

var React = require("react");
var ReactDOM = require('react-dom');

require("./iframe/public/reset.css");

var IndexPage = require("./app/index.jsx")
var Wenzhang = require("./app/wenzhang.jsx")
var Zhuanlan = require("./app/zhuanlan.jsx")

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={ IndexPage } />
    <Route path="/users" component={ Wenzhang } />
     <Route path="/zhuanlan" component={ Zhuanlan } />
  </Router>
), document.getElementById('zh-react'));
