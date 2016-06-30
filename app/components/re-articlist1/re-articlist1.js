/**
 * 文章列表 by fengchuatao 
 */


/**
 * 导入业务基础模块
 */

import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';



/**
 * 导入样式
 */
import Stylesheet from './re-articlist1.less'

/**
 * 导入业务组件
 */

import ReactchangeButton from "../re-changebuttn/re-changebuttn.js";

/**
 * 导入业务模块
 */

import { getwenzhangList } from "../../actions/action-wenzhang.js";

var Reactariticlist1 = React.createClass({
	componentDidMount: function(){
		const { dispatch } = this.props;
		dispatch(getwenzhangList()) //页面加载完成数据拉取
  	},
	render: function() {
		return (
			<div className = "re-articlist1-box">
				<h2><span>文章 · 发现</span></h2>
				<div className= "re-articlist1-box-list">
					{this.props.wenzhangarray.map((alist, index) =>
						<Link to = {`/wenzhang/${alist.url_token}`}>
							<div className = "re-articlist1-box-listone" key={index}>
								<p className = "re-articlist1-box-header"><img src={`http://127.0.0.1:3000/geturl?q=${alist.column.image_url}`}/></p>
								<p className = "re-articlist1-box-title">{alist.title}</p>
								<p className = "re-articlist1-box-description">
									<span className="re-articlist1-box-author">{alist.author.name}</span>
									<span className="re-articlist1-box-source ">{alist.author.bio}</span>
								</p>
							</div>
						</Link>
					)}
				</div>
				<ReactchangeButton />
			</div>

		)
	}
})

function mapStateToProps(state) {
  return {
    wenzhangarray: state.ReIndexwenzhang.WENZHANG?state.ReIndexwenzhang.WENZHANG:[],
  };
}

export default connect(
  mapStateToProps
)(Reactariticlist1);