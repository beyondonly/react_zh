/**
 * 首页底部by fengchuatao 
 */

var React = require('react');
require('./index_footer.less');

var Indexfooter = React.createClass({
	render: function() {
		return (
			<div className="Indexfooter-box">
				<h3>在知乎创作</h3>
				<p className = "Indexfooter-box-bottom-bar">
					<a>关于</a>
					<span>©2016 知乎</span>
				</p>
			</div>
		)
	}
})

module.exports = Indexfooter;