/*引入路由*/
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var hashHistory = require('react-router').hashHistory

var React = require("react");
var ReactDOM = require('react-dom');

require("./iframe/public/reset.css");

var IndexPage = require("./app/index.jsx")
var Wenzhang = require("./app/wenzhang.jsx")
var Zhuanlan = require("./app/zhuanlan.jsx")

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={ IndexPage } />
    <Route path="users" component={ Wenzhang } handler = "users"/>
    <Route path="zhuanlan" component={ Zhuanlan } handler = "zhuanlan"/>
  </Router>
), document.getElementById('zh-react'));
