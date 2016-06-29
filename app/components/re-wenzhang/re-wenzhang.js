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
		var g_data = this.props.WenzhangContent;
		var author = g_data.author?g_data.author.name:"";
		var topics = g_data.topics?g_data.topics:[];
		var likesCount = g_data.likesCount;
		var lastestLikers = g_data.lastestLikers?g_data.lastestLikers:[];
		var gooddata = {likesCount:likesCount,lastestLikers:lastestLikers}
		var avatar = g_data.author?g_data.author.avatar:"";
		return (
			<div className = "ReactZhuan-box">
				<img src= {g_data.titleImage} className = "ReactZhuan-box-pagetip"/>
				<h1 className="ReactZhuan-box-multiline2">{g_data.title}</h1>
				<div className = "ReactZhuan-box-meta">
					<img src={avatar}/>
					<span>{author}</span>
					<span>{g_data.publishedTime}</span>
				</div>
				<div  className = "ReactZhuan-box-text"  dangerouslySetInnerHTML={{__html: g_data.content}}/>
				<div className = "ReactZhuan-box-target">
					{topics.map((alist, index) =>
						<span key={index}>{alist.name}</span>
					)}
				</div>
				<ReactGood GoodDate = {gooddata}/>
				<Reactcomment />
			</div>
		)
	}
})

module.exports = Reactwenzhang;