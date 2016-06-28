/**
 * pagename {文章详细页}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

/**
 * 引入业务基础模块
 */

import React from 'react';
import ReactDOM from 'react-dom'

/**
 * 导入各种组件
 */
import ReactZhuan from "../components/re-wenzhang/re-wenzhang.js";
import ReactIncluded from "../components/re-included/re-included.js";
import Reactrecommend from "../components/re-recommend/re-recommend.js";


var Wenzhang = React.createClass({
	render: function() {
	 return (
		<div>
		 	<ReactZhuan/>
		 	<ReactIncluded />
		 	<Reactrecommend />
		</div>
		)
	}
})

module.exports = Wenzhang;

