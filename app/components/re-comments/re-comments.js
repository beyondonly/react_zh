/**
 * pagename {评论组件}
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
import Stylesheet from "./re-comments.less";


/**
 * 导入业务模块
 */

import { getfasycwenzhangcomment } from "../../actions/action-wenzhangcontent.js";


var Reactcomment = React.createClass({
	componentDidMount: function(){
		const { dispatch,url } = this.props;
		dispatch(getfasycwenzhangcomment(url))
	},
	render: function() {
		return(
			<div className = "re-comments-box">
				<h2><span>9条评论</span></h2>
				<div className = "re-comments-box-commentbox">
					<img src= "http://img4.imgtn.bdimg.com/it/u=25955219,1834836773&fm=23&gp=0.jpg" />
					<div className = "re-comments-box-commentbox-form">
						<span class="holdertext" holdertext="1" contenteditable="false">写下你的评论</span>
					</div>
				</div>
				<div className = "re-comments-box-comment-list">
					{this.props.Commlist.map((alist, index) =>
						<div className = "re-comments-box-comment-listone">
							<img src= {`http://127.0.0.1:3000/geturl?q=${alist.author.avatar}`} />
							<span>{alist.author.name}</span>
							<div className = "re-comments-box-comment-listone-text">
								<p dangerouslySetInnerHTML={{__html: alist.content}}></p>
							</div>
							<div className = "re-comments-box-comment-listono-footer">
								<span>{alist.createdTime}</span>
								<span>回复</span>
								<span>赞</span>
								<span>举报</span>
							</div>
						</div>
					)}
				</div>
			</div>
		) 
	}
})

//获取全局state
function getWenzhangConten(state) {
	return {
		Commlist: state.Regetcommentlist.commentlist?state.Regetcommentlist.commentlist:[]
	}
}
export default connect(getWenzhangConten)(Reactcomment);