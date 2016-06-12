/**
 * 头部组件 by fengchuatao 
 */

var React = require('react');
require('./re-topbar.css');

var ReactTopbar = React.createClass({
	render: function() {
		return (
			<div className = "ReactTopbar-box">
				<p>点撒打算</p>
			</div>
		)
	}
})

module.exports = ReactTopbar;