/**
 * pagename {文章详细页}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

/**
 * 引入业务基础模块
 */

import React from 'react';
import { connect } from 'react-redux';

/**
 * 导入各种组件
 */
import Reactwenzhang from "../components/re-wenzhang/re-wenzhang.js";
import ReactIncluded from "../components/re-included/re-included.js";
import Reactrecommend from "../components/re-recommend/re-recommend.js";

/**
 * 导入业务模块
 */

import { getDataAsyncwenzhangcontent } from "../actions/action-wenzhangcontent.js";

var Wenzhang = React.createClass({
	render: function() {
		const {params} = this.props;
		return (
			<div>
			 	<Reactwenzhang url = {params.url}/>
			 	<ReactIncluded url = {params.url}/>
			 	<Reactrecommend url = {params.url}/>
			</div>
	    )
	}
})

module.exports = Wenzhang;

