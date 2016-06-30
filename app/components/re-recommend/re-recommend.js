/**
 * 推荐阅读组件
 * by 代小星
 */

/**
 * 引入业务基础库
 */
import React from "react";
import { connect } from 'react-redux';


/**
 * 导入样式表
 */

import StyleSheet from './re-recommend.less';

/**
 * 导入业务模块
 */

import { actionrecommendations } from "../../actions/action-wenzhangcontent.js";

var Reactrecommend = React.createClass({
	componentDidMount: function(){
		const { dispatch} = this.props;
		dispatch(actionrecommendations())
	},
	render: function() {
		const {RECOMMENT}  = this.props;
		return (
			<div className = "Reactrecommend-box">
				<h2><span>推荐阅读</span></h2>
				<div className = "Reactrecommend-box-list">
					{RECOMMENT.map((alist, index) =>
						<div className = "Reactrecommend-box-listone">
							<img src = {alist.image_url} />
							<div className = "Reactrecommend-box-listone-isolate">
								<h1 className = "Reactrecommend-box-listone-isolate-title">
									{alist.title}
								</h1>
								<p>
									编辑精选
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}
})

//获取全局state
function getReactcommentstore(state) {
	return {
		RECOMMENT: state.Rerecommendations.recommenlist?state.Rerecommendations.recommenlist:[]
	}
}
export default connect(getReactcommentstore)(Reactrecommend);
