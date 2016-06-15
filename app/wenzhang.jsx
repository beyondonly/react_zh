var React = require('react');
var ReactDOM = require('react-dom');

var ReactTopbar = require('../components/re-topbar/re-topbar.jsx');
var ReactZhuan = require("../components/re-wenzhang/re-wenzhang.jsx");
var ReactIncluded =  require("../components/re-included/re-included.jsx")
var Reactrecommend = require("../components/re-recommend/re-recommend.jsx");

var addons = require('react-addons');

var ReactCSSTransitionGroup = addons.CSSTransitionGroup;

var Wenzhang = React.createClass({
	render: function() {
	 return (
		<div>
		 	<ReactZhuan  source="http://127.0.0.1:3000"/>
		 	<ReactIncluded />
		 	<Reactrecommend />
		</div>
		)
	}
})

module.exports = Wenzhang;

