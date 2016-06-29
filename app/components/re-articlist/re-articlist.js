/**
 * 专栏列表 by fengchuatao 
 */


/**
 * 导入业务基础模块
 */

import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'


/**
 * 导入样式
 */
import Stylesheet from './re-articlist.less'

/**
 * 导入业务组件
 */

import ReactchangeButton from "../re-changebuttn/re-changebuttn.js";

export default class Reactariticlist extends Component {
  render() {
    return (
			<div className = "re-articlist-box">
				<h2><span>专栏 · 发现</span></h2>
				<div className= "re-articlist-box-list">
					{this.props.zhuanlanarray.map((alist, index) =>
				        <Link to = {`/zhuanlan/${alist.slug}`}>
					        <div className = "re-articlist-box-listone" key={index}>
								<p className = "re-articlist-box-header"><img src={alist.avatar} /></p>
								<p className = "re-articlist-box-title">{alist.name}</p>
								<p className = "re-articlist-box-description">{alist.description}</p>
								<p className = "re-articlist-box-link ">
									<a>进入专栏</a>
								</p>
							</div>
						</Link>
			        )}
				</div>
				<ReactchangeButton />
			</div>
		)
  }
}



