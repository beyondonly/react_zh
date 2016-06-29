/**
 * 专栏文章列表组件
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

import	Stylesheet from './re-zhuanlanlist.less';

/**
 * 导入业务模块
 */
import { getwenzhangwenzhangfn } from "../../actions/action-zhuanlanone.js";

var ReactZhuanlanlist = React.createClass({
	componentDidMount: function(){
		const { dispatch } = this.props;
		dispatch(getwenzhangwenzhangfn())
	},
	render: function() {
		const {wenzhanglist} = this.props;
		return (
			<div className = "re-zhuanlanlist-box">
				<h2><span>最新文章</span></h2>
				<div className = "re-zhuanlanlist-list">
					{wenzhanglist.map((alist,index) =>
						<div className = "re-zhuanlanlist-listone">
							<img src ={alist.titleImage} className = "re-zhuanlanlist-listone-titleimg"/>
							<h1>{alist.title}</h1>
							<p className="re-zhuanlanlist-listone-post">
								<p max="truncateMax" dangerouslySetInnerHTML={{__html: alist.content}}></p>
							</p>
							<div className="re-zhuanlanlist-listone-footer">
								<div className = "re-zhuanlanlist-listone-footer-authoer">
									<span>{alist.author.name}</span>
									<span>{alist.publishedTime}</span>
								</div>
								<div className = "re-zhuanlanlist-listone-footer-func">
									<span>{alist.likesCount}赞</span>
									<span>{alist.commentsCount}评论</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}
})

function getReactZhuanlanlist(state) {
	return {
		wenzhanglist: state.Rezhuanlanwenzhang.zhualanwenzhang?state.Rezhuanlanwenzhang.zhualanwenzhang:[]
	}
}
export default connect(getReactZhuanlanlist)(ReactZhuanlanlist);