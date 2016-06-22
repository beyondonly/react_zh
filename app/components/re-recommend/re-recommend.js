/**
 * 头部组件 by fengchuatao 
 */

var React = require('react');

require('./re-recommend.less');

var Reactrecommend = React.createClass({
	render: function() {
		return (
			<div className = "Reactrecommend-box">
				<h2><span>推荐阅读</span></h2>
				<div className = "Reactrecommend-box-list">
					<div className = "Reactrecommend-box-listone">
						<img src = "http://www.bz55.com/uploads/allimg/130524/1-1305241FZ8.jpg" />
						<div className = "Reactrecommend-box-listone-isolate">
							<h1 className = "Reactrecommend-box-listone-isolate-title">
								假冒侵权品作促销赠品？属其他商标侵权行为！
							</h1>
							<p>
								璞琳说法
							</p>
						</div>
					</div>
					<div className = "Reactrecommend-box-listone">
						<img src = "http://www.bz55.com/uploads/allimg/130524/1-1305241FZ8.jpg" />
						<div className = "Reactrecommend-box-listone-isolate">
							<h1 className = "Reactrecommend-box-listone-isolate-title">
								假冒侵权品作促销赠品？属其他商标侵权行为！
							</h1>
							<p>
								璞琳说法
							</p>
						</div>
					</div>
					<div className = "Reactrecommend-box-listone">
						<img src = "http://www.bz55.com/uploads/allimg/130524/1-1305241FZ8.jpg" />
						<div className = "Reactrecommend-box-listone-isolate">
							<h1 className = "Reactrecommend-box-listone-isolate-title">
								假冒侵权品作促销赠品？属其他商标侵权行为！
							</h1>
							<p>
								璞琳说法
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Reactrecommend;