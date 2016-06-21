/**
 * 头部组件 by fengchuatao 
 */

var React = require('react');

require('./re-topbar.css');
var Link = require('react-router').Link;


var ReactTopbar = React.createClass({
	getInitialState: function() {
    	return {showMuen: false};
  	},
	handleClick: function() { //绑定按钮点击
		this.setState({showMuen: !this.state.showMuen})
	},
	render: function() {
		var toggerShow = this.state.showMuen? "ReactTopbar-animationshow":"";
		return (
			<div className = "ReactTopbar-box">
				<a className ="ReactTopbar-box-logo icon-ic_zhihu_logo"></a>
				<div className="ReactTopbar-box-slidedown">
					<i className = "icon-ic_nav_more" onClick={this.handleClick}></i>
					<ul className = {toggerShow}>
						<li><Link to="/users">草稿</Link></li>
						<li><Link to="/zhuanlan">我的文章</Link></li>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports = ReactTopbar;