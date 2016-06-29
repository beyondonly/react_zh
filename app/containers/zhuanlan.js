/**
 * 专栏页面
 * by 代小型
 */

/**
 * 引入基础业务模块
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 引入各个页面组件
 */
import ReactUserinfo from "../components/re-userinfo/re-userinfo.js";
import ReactZhuanlanlist from "../components/re-zhuanlanlist/re-zhuanlanlist.js"

var Zhuanlan = React.createClass({
	render: function() {
		const {params} = this.props;
		return (
			<div className = "Reactzhuanlan">
			 	<ReactUserinfo slug = {params.slug} />
			 	<ReactZhuanlanlist slug = {params.slug}/>
			</div>
		)
	}
})

module.exports = Zhuanlan;

