/**
 * 点赞列表
 * by 代小星
 */

/**
 * 引入业务基础包
 */

import React from "React";

/**
 * 导入样式
 */

import StyleSheet from "./re-good.less"

var ReactGood = React.createClass({
	render: function() {
		return(
			<div className = "ReactGood-box">
				<div className = "ReactGood-box-votes">
					<span className = "ReactGood-box-votesbox">
						<i className = "icon-ic_column_like"></i>
						{this.props.GoodDate.likesCount}
					</span>
					<div className="ReactGood-box-votesboxsection">
						<span><i className = "icon-ic_column_share"></i>分享</span>
						<span><i className = "icon-ic_column_report"></i>举报</span>
					</div>
					<div className = "ReactGood-box-votespeople">
						{this.props.GoodDate.lastestLikers.map((alist,index) =>
							<img src = {alist.avatar} />
						)}
					</div>
				</div>
			</div>
		)
	}
})

module.exports = ReactGood;