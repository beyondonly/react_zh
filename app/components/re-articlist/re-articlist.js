/**
 * 文章列表 by fengchuatao 
 */

var React = require('react');
var ReactchangeButton = require("../re-changebuttn/re-changebuttn.js");

require('./re-articlist.css');

var Reactariticlist = React.createClass({
	render: function() {
		return (
			<div className = "re-articlist-box">
				<h2><span>专栏 · 发现</span></h2>
				<div className= "re-articlist-box-list">
					<div className = "re-articlist-box-listone">
						<p className = "re-articlist-box-header"><img src='https://pic2.zhimg.com/30f5a450285b2a22985dd6ad5cd84efd_xl.jpg' /></p>
						<p className = "re-articlist-box-title">Tim's Landscape</p>
						<p className = "re-articlist-box-description">旅行见闻，风景和摄影</p>
						<p className = "re-articlist-box-link ">
							<a>进入专栏</a>
						</p>
					</div>
					<div className = "re-articlist-box-listone">
						<p className = "re-articlist-box-header"><img src='https://pic2.zhimg.com/30f5a450285b2a22985dd6ad5cd84efd_xl.jpg' /></p>
						<p className = "re-articlist-box-title">Tim's Landscape</p>
						<p className = "re-articlist-box-description">旅行见闻，风景和摄影</p>
						<p className = "re-articlist-box-link ">
							<a>进入专栏</a>
						</p>
					</div>
					<div className = "re-articlist-box-listone">
						<p className = "re-articlist-box-header"><img src='https://pic2.zhimg.com/30f5a450285b2a22985dd6ad5cd84efd_xl.jpg' /></p>
						<p className = "re-articlist-box-title">Tim's Landscape</p>
						<p className = "re-articlist-box-description">旅行见闻，风景和摄影</p>
						<p className = "re-articlist-box-link ">
							<a>进入专栏</a>
						</p>
					</div>
					<div className = "re-articlist-box-listone">
						<p className = "re-articlist-box-header"><img src='https://pic2.zhimg.com/30f5a450285b2a22985dd6ad5cd84efd_xl.jpg' /></p>
						<p className = "re-articlist-box-title">Tim's Landscape</p>
						<p className = "re-articlist-box-description">旅行见闻，风景和摄影</p>
						<p className = "re-articlist-box-link ">
							<a>进入专栏</a>
						</p>
					</div>
				</div>
				<ReactchangeButton />
			</div>
		)
	}
})

module.exports = Reactariticlist;