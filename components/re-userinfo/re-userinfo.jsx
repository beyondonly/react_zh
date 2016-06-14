/**
 * 专栏用户信息展现
 */

var React = require('React');
var Link = require('react-router').Link;

require('./re-userinfo.css');

var ReactUserinfo = React.createClass({
	render: function() {
		return (
			<div className = "re-userinfo-box">
				<div className = "re-userinfo-box-headerlink">
					<img src= "http://www.bz55.com/uploads/allimg/130524/1-1305241FZ8.jpg" />
				</div>
				<div className = "re-userinfo-box-title">
					知乎日报
				</div>
				<div className = "re-userinfo-box-description">
					知乎日报启动画面接受所有摄影师朋友们的投稿，将作…
				</div>
				<div className = "re-userinfo-box-foucs">
					<button className = "re-userinfo-box-foucsbutton">关注专栏</button>
					<div className = "re-userinfo-box-slidedown">
						<span>
						   <i className = "icon-ic_unfold"></i>
						</span>
						<ul className = "re-userinfo-box-muen">
							<li><Link to = "/nciai">关于</Link></li>
							<li><Link to = "/nicai">投稿到该专栏</Link></li>
						</ul>
					</div> 
				</div>
			</div>
		)
	}
})

module.exports = ReactUserinfo;