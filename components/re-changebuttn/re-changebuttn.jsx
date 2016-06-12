/**
 * 文章列表 by fengchuatao 
 */

var React = require('react');
require('./re-changebuttn.css');

var Reactchangebuttn = React.createClass({
	render: function() {
		return (
			<div className="re-changebuttn">
				<a>
					<i className="icon-ic_refresh"></i>
					<span>换一换</span>
				</a>
			</div>
		)
	}
})

module.exports = Reactchangebuttn;