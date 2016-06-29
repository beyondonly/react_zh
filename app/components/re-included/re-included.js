/**
 * pagename {收录组件}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

/**
 * 引入业务基础模块
 */
import React from "React";
import { connect } from 'react-redux';

/**
 * 导入样式表
 */
import Stylesheet from "./re-included.less";


/**
 * 导入业务模块
 */

import { getwenzhangShoulu } from "../../actions/action-wenzhangcontent.js";

var ReactIncluded = React.createClass({
	componentDidMount: function(){
		const { dispatch } = this.props;
		dispatch(getwenzhangShoulu())
	},
	render: function(){
		const Shoulu = this.props.Shoulu;
		return(
			<div className = "ReactIncluded-box">
				<h2><span>文章被以下专栏收录</span></h2>
				<div className = "ReactIncluded-box-list">
					{Shoulu.map((alist,index) =>
						<div className = "ReactIncluded-box-listbox" key={index}>
							<p className = "ReactIncluded-box-header">
							  <img src = {alist.sourceColumn.image_url} />
							</p>
							<p className = "ReactIncluded-box-title">
								{alist.sourceColumn.name}
							</p>
							<p className = "ReactIncluded-box-intro">
								{alist.sourceColumn.description}
							</p>
							<a className = "ReactIncluded-box-link">进入专栏</a>
						</div>
					)}
				</div>
			</div>
		)
	}
})

//获取全局state
function getWenzhangContenShoulu(state) {
	return {
		Shoulu: state.Regetcommentshoulu.Shoulu?state.Regetcommentshoulu.Shoulu:[]
	}
}
export default connect(getWenzhangContenShoulu)(ReactIncluded);