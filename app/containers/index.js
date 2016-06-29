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

/**
 * 导入业务模块
 */

import { getzhuanlanlist } from "../actions/action-zhuanlan.js";
import { getwenzhangList } from "../actions/action-wenzhang.js";

var IndexPage = React.createClass({
	componentDidMount: function(){
		const {dispatch } = this.props;
		dispatch(getzhuanlanlist()) //页面加载完成数据拉取
		dispatch(getwenzhangList()) //页面加载完成数据拉取
	},
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


function mapStateToProps(state) {
  return {
    wenzhangarray: state.ReIndexwenzhang.WENZHANG?state.ReIndexwenzhang.WENZHANG:[],
    zhuanlanarray: state.ReIndexzhuanlan.ZHUANLANDATE?state.ReIndexzhuanlan.ZHUANLANDATE:[]
  };
}

export default connect(
  mapStateToProps
)(IndexPage);



