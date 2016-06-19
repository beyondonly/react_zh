/**
 * 文章列表 by fengchuatao 
 */

var React = require('react');
require('./re-articlist1.css');
var ReactchangeButton = require("../re-changebuttn/re-changebuttn.jsx");

var Reactariticlist1 = React.createClass({
	render: function() {
		return (
			<div className = "re-articlist1-box">
				<h2><span>文章 · 发现</span></h2>
				<div className= "re-articlist1-box-list">
					<div className = "re-articlist1-box-listone">
						<p className = "re-articlist1-box-header"><img src='https://pic2.zhimg.com/30f5a450285b2a22985dd6ad5cd84efd_xl.jpg' /></p>
						<p className = "re-articlist1-box-title">肥胖带来的不仅是疾病，还让我们离死神更近了一点</p>
						<p className = "re-articlist1-box-description">
							<span className="re-articlist1-box-author">旅行见闻，风景和摄影</span>
							<span className="re-articlist1-box-source ">发表者:代小星</span>
						</p>
					</div>
					<div className = "re-articlist1-box-listone">
						<p className = "re-articlist1-box-header"><img src='https://pic2.zhimg.com/30f5a450285b2a22985dd6ad5cd84efd_xl.jpg' /></p>
						<p className = "re-articlist1-box-title">肥胖带来的不仅是疾病，还让我们离死神更近了一点</p>
						<p className = "re-articlist1-box-description">
							<span className="re-articlist1-box-author">旅行见闻，风景和摄影</span>
							<span className="re-articlist1-box-source ">发表者:代小星</span>
						</p>
					</div>
					<div className = "re-articlist1-box-listone">
						<p className = "re-articlist1-box-header"><img src='https://pic2.zhimg.com/30f5a450285b2a22985dd6ad5cd84efd_xl.jpg' /></p>
						<p className = "re-articlist1-box-title">肥胖带来的不仅是疾病，还让我们离死神更近了一点</p>
						<p className = "re-articlist1-box-description">
							<span className="re-articlist1-box-author">旅行见闻，风景和摄影</span>
							<span className="re-articlist1-box-source ">发表者:代小星</span>
						</p>
					</div>
					<div className = "re-articlist1-box-listone">
						<p className = "re-articlist1-box-header"><img src='https://pic2.zhimg.com/30f5a450285b2a22985dd6ad5cd84efd_xl.jpg' /></p>
						<p className = "re-articlist1-box-title">肥胖带来的不仅是疾病，还让我们离死神更近了一点</p>
						<p className = "re-articlist1-box-description">
							<span className="re-articlist1-box-author">旅行见闻，风景和摄影</span>
							<span className="re-articlist1-box-source ">发表者:代小星</span>
						</p>
					</div>
				</div>
				<ReactchangeButton />
			</div>

		)
	}
})

module.exports = Reactariticlist1;