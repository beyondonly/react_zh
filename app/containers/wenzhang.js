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

import { getzhuanlanlist } from "../actions/action-webzhanginfo.js";

var Wenzhang = React.createClass({
	componentDidMount: function(){
		const {dispatch } = this.props;
		dispatch(getzhuanlanlist()) //页面加载完成数据拉取
		dispatch(getwenzhangList()) //页面加载完成数据拉取
	},
	render: function() {
	 return (
		<div>
		 	<Reactwenzhang />
		 	<ReactIncluded />
		 	<Reactrecommend />
		</div>
		)
	}
})

export default connect()(Wenzhang);

