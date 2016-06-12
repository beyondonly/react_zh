/**
 * 首页大图 by fengchuatao 
 */

var React = require('react');
require('./index_bg.css');

var Index_bg = React.createClass({
	render: function() {
		return (
			<div className="index_bg">
				<div className="index_bg_top">
					<h1></h1>
					<h2>随心写作，自由表达</h2>
				</div>
			</div>
		)
	}
})

module.exports = Index_bg;