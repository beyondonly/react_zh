/**
 * 头部组件 by fengchuatao 
 */

var React = require('react');
require('./re-topbar.css');

var ReactTopbar = React.createClass({
	render: function() {
		return (
			<div className = "ReactTopbar-box">
				<a className ="ReactTopbar-box-logo icon-ic_zhihu_logo"></a>
				<div className="ReactTopbar-box-slidedown">
					<i className = "icon-ic_nav_more"></i>
					<ul>
						<li><a>草稿</a></li>
						<li><a>我的文章</a></li>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports = ReactTopbar;