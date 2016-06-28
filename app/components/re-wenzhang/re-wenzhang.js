/**
 * 组件名称: 文章内容
 * 功能项: 承载文章内容
 * by 代小星 
 */

/**
 * 引入业务基本模板包
 */
 import React from 'React';
 import { connect } from 'react-redux';

 /**
 * 引入对应less
 */
import Styleless from "./re-wenzhang.less"


/**
 * 导入业务模块
 */

import ReactGood from "../re-good/re-good.js";
import Reactcomment from "../re-comments/re-comments.js";

var Reactwenzhang = React.createClass({
	render: function() {
		return (
			<div className = "ReactZhuan-box">
				<img src= {this.props.WenzhangContent.titleImage} className = "ReactZhuan-box-pagetip"/>
				<h1 className="ReactZhuan-box-multiline2">{this.props.WenzhangContent.title}</h1>
				<div className = "ReactZhuan-box-meta">
					<img src='http://image.tianjimedia.com/uploadImages/2012/012/2YXG0J416V69.jpg' />
					<span></span>
					<span>{this.props.WenzhangContent.publishedTime}</span>
				</div>
				<div  className = "ReactZhuan-box-text"  dangerouslySetInnerHTML={{__html: this.props.WenzhangContent.content}}/>
				<div className = "ReactZhuan-box-target">
					<span>零售行业</span>
					<span>人物传记</span>
					<span>阅读</span>
				</div>
				<ReactGood />
				<Reactcomment />
			</div>
		)
	}
})

module.exports = Reactwenzhang;