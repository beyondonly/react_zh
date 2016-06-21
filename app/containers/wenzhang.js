var React = require('react');
var ReactDOM = require('react-dom');

var ReactTopbar = require('../components/re-topbar/re-topbar.js');
var ReactZhuan = require("../components/re-wenzhang/re-wenzhang.js");
var ReactIncluded =  require("../components/re-included/re-included.js")
var Reactrecommend = require("../components/re-recommend/re-recommend.js");

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

