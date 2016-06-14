var React = require('react');
var ReactDOM = require('react-dom');

var ReactTopbar = require('../components/re-topbar/re-topbar.jsx');
var ReactUserinfo =  require("../components/re-userinfo/re-userinfo.jsx")
var ReactZhuanlanlist  =  require("../components/re-zhuanlanlist/re-zhuanlanlist.jsx")

var Zhuanlan = React.createClass({
	render: function() {
		return (
			<div className = "Reactzhuanlan">
			 	<ReactTopbar />
			 	<ReactUserinfo />
			 	<ReactZhuanlanlist />
			</div>
		)
	}
})

module.exports = Zhuanlan;

