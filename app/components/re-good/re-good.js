var React = require("React");
require("./re-good.less")

var ReactGood = React.createClass({
	render: function() {
		return(
			<div className = "ReactGood-box">
				<div className = "ReactGood-box-votes">
					<span className = "ReactGood-box-votesbox">
						<i className = "icon-ic_column_like"></i>
						32
					</span>
					<div className="ReactGood-box-votesboxsection">
						<span><i className = "icon-ic_column_share"></i>分享</span>
						<span><i className = "icon-ic_column_report"></i>举报</span>
					</div>
					<div className = "ReactGood-box-votespeople">
						
						<img src='http://h.hiphotos.baidu.com/zhidao/pic/item/c8177f3e6709c93d0f5f00e79b3df8dcd1005474.jpg' alt="" />
						<img src='http://h.hiphotos.baidu.com/zhidao/pic/item/c8177f3e6709c93d0f5f00e79b3df8dcd1005474.jpg' alt="" />
						<img src='http://h.hiphotos.baidu.com/zhidao/pic/item/c8177f3e6709c93d0f5f00e79b3df8dcd1005474.jpg' alt="" />
						<img src='http://h.hiphotos.baidu.com/zhidao/pic/item/c8177f3e6709c93d0f5f00e79b3df8dcd1005474.jpg' alt="" />
						<img src='http://h.hiphotos.baidu.com/zhidao/pic/item/c8177f3e6709c93d0f5f00e79b3df8dcd1005474.jpg' alt="" />
					</div>
				</div>
			</div>
		)
	}
})

module.exports = ReactGood;