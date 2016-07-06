/**
 * 专栏用户信息展示组件
 * by 代小星
 */

/**
 * 引入业务基础模块
 */

import React from "React";
import { connect } from 'react-redux';

/**
 * 导入样式表
 */

import	Stylesheet from './re-userinfo.less';

/**
 * 导入业务模块
 */
import { getwenzhangList } from "../../actions/action-zhuanlanone.js";


var ReactUserinfo = React.createClass({
	componentDidMount: function(){
		const { dispatch,slug } = this.props;
		dispatch(getwenzhangList(slug))
	},
	render: function() {
		const { UserInfo } = this.props;
		return (
			<div className = "re-userinfo-box">
				<div className = "re-userinfo-box-headerlink">
					<img src= {`http://127.0.0.1:3000/geturl?q=${UserInfo.avatar}`} />
				</div>
				<div className = "re-userinfo-box-title">
					{UserInfo.name}
				</div>
				<div className = "re-userinfo-box-description">
					{UserInfo.description}
				</div>
				<div className = "re-userinfo-box-foucs">
					<button className = "re-userinfo-box-foucsbutton">关注专栏</button>
					<div className = "re-userinfo-box-slidedown">
						<span>
						   <i className = "icon-ic_unfold"></i>
						</span>
						<ul className = "re-userinfo-box-muen">
							<li>关于</li>
							<li>投稿到该专栏</li>
						</ul>
					</div> 
				</div>
				<div className = "re-userinfo-box-followers">
					<span>{UserInfo.followersCount}</span> 人关注
				</div>
			</div>
		)
	}
})

//获取全局state
function getReactUserinfo(state) {
	return {
		UserInfo: state.Rezhuanlaninfo.zhualaninfo?state.Rezhuanlaninfo.zhualaninfo:[]
	}
}
export default connect(getReactUserinfo)(ReactUserinfo);
