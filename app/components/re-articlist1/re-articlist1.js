/**
 * 文章列表 by fengchuatao 
 */

var React = require('react');
require('./re-articlist1.less');
var ReactchangeButton = require("../re-changebuttn/re-changebuttn.js");

var Reactariticlist1 = React.createClass({
	render: function() {
		return (
			<div className = "re-articlist1-box">
				<h2><span>文章 · 发现</span></h2>
				<div className= "re-articlist1-box-list">
					{this.props.wenzhangarray.map((alist, index) =>
						<div className = "re-articlist1-box-listone" key={index}>
							<p className = "re-articlist1-box-header"><img src= {alist.column.image_url} /></p>
							<p className = "re-articlist1-box-title">{alist.title}</p>
							<p className = "re-articlist1-box-description">
								<span className="re-articlist1-box-author">{alist.author.name}</span>
								<span className="re-articlist1-box-source ">{alist.author.bio}</span>
							</p>
						</div>
					)}
				</div>
				<ReactchangeButton />
			</div>

		)
	}
})

module.exports = Reactariticlist1;