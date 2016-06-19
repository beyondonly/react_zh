var React = require("React");

require("./re-comments.css")

var Reactcomment = React.createClass({
	render: function() {
		return(
			<div className = "re-comments-box">
				<h2><span>文章 · 发现</span></h2>
				<div className = "re-comments-box-commentbox">
					<img src= "http://img4.imgtn.bdimg.com/it/u=25955219,1834836773&fm=23&gp=0.jpg" />
					<div className = "re-comments-box-commentbox-form">
						<span class="holdertext" holdertext="1" contenteditable="false">写下你的评论</span>
					</div>
				</div>
				<div className = "re-comments-box-comment-list">
					<div className = "re-comments-box-comment-listone">
						<img src= "http://img4.imgtn.bdimg.com/it/u=25955219,1834836773&fm=23&gp=0.jpg" />
						<span>我叫代小星</span>
						<div className = "re-comments-box-comment-listone-text">
							目前在国内的中央集权的策略导致了一些不良后果，背离了以顾客为中心的原则。
						</div>
						<div className = "re-comments-box-comment-listono-footer">
							<span>8小时以前</span>
							<span>回复</span>
							<span>赞</span>
							<span>举报</span>
						</div>
					</div>
					<div className = "re-comments-box-comment-listone">
						<img src= "http://img4.imgtn.bdimg.com/it/u=25955219,1834836773&fm=23&gp=0.jpg" />
						<span>我叫代小星</span>
						<div className = "re-comments-box-comment-listone-text">
							目前在国内的中央集权的策略导致了一些不良后果，背离了以顾客为中心的原则。
						</div>
						<div className = "re-comments-box-comment-listono-footer">
							<span>8小时以前</span>
							<span>回复</span>
							<span>赞</span>
							<span>举报</span>
						</div>
					</div>
					<div className = "re-comments-box-comment-listone">
						<img src= "http://img4.imgtn.bdimg.com/it/u=25955219,1834836773&fm=23&gp=0.jpg" />
						<span>我叫代小星</span>
						<div className = "re-comments-box-comment-listone-text">
							目前在国内的中央集权的策略导致了一些不良后果，背离了以顾客为中心的原则。
						</div>
						<div className = "re-comments-box-comment-listono-footer">
							<span>8小时以前</span>
							<span>回复</span>
							<span>赞</span>
							<span>举报</span>
						</div>
					</div>
					<div className = "re-comments-box-comment-listone">
						<img src= "http://img4.imgtn.bdimg.com/it/u=25955219,1834836773&fm=23&gp=0.jpg" />
						<span>我叫代小星</span>
						<div className = "re-comments-box-comment-listone-text">
							目前在国内的中央集权的策略导致了一些不良后果，背离了以顾客为中心的原则。
						</div>
						<div className = "re-comments-box-comment-listono-footer">
							<span>8小时以前</span>
							<span>回复</span>
							<span>赞</span>
							<span>举报</span>
						</div>
					</div>
				</div>
			</div>
		) 
	}
})

module.exports = Reactcomment;