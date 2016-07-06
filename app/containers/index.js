/**
 * pagename {首屏页面}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

/**
 * 引入业务基础模块
 */

import React from "react"
import { connect } from 'react-redux';


/**
 * 导入各种组件
 */
import Index_bg from "../components/index_bg/index_bg.js";
import Reactariticlist1 from "../components/re-articlist1/re-articlist1.js";
import Indexfooter from "../components/index_footer/index_footer.js";
import Reactariticlist from '../components/re-articlist/re-articlist';


var IndexPage = React.createClass({
	render: function() {
		const {zhuanlanarray,wenzhangarray } = this.props;
		return (
	        <div>
			 	<Index_bg/>
			 	<Reactariticlist zhuanlanarray={zhuanlanarray}/>
			 	<Reactariticlist1 wenzhangarray = { wenzhangarray }/>
			 	<Indexfooter />
			</div>
		)
	}
})

module.exports = IndexPage;



