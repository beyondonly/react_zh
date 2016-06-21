var React = require('react');
var ReactDOM = require('react-dom');

var ReactTopbar = require('../components/re-topbar/re-topbar.js');
var ReactUserinfo =  require("../components/re-userinfo/re-userinfo.js")
var ReactZhuanlanlist  =  require("../components/re-zhuanlanlist/re-zhuanlanlist.js")

var Zhuanlan = React.createClass({
	render: function() {
		return (
			<div className = "Reactzhuanlan">
			 	<ReactUserinfo />
			 	<ReactZhuanlanlist />
			</div>
		)
	}
})

module.exports = Zhuanlan;

