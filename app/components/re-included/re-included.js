var React = require('react');

require('./re-included.less');

var ReactIncluded = React.createClass({
	render: function(){
		return(
			<div className = "ReactIncluded-box">
				<h2><span>文章被以下专栏收录</span></h2>
				<div className = "ReactIncluded-box-list">
					<div className = "ReactIncluded-box-listbox">
						<p className = "ReactIncluded-box-header">
						  <img src ="http://img5.imgtn.bdimg.com/it/u=2012368586,3454035391&fm=23&gp=0.jpg" />
						</p>
						<p className = "ReactIncluded-box-title">
							求智集
						</p>
						<p className = "ReactIncluded-box-intro">
							每天临睡前比清晨醒来时更智慧一点。
						</p>
						<a className = "ReactIncluded-box-link">进入专栏</a>
					</div>
					<div className = "ReactIncluded-box-listbox">
						<p className = "ReactIncluded-box-header">
						  <img src ="http://img5.imgtn.bdimg.com/it/u=2012368586,3454035391&fm=23&gp=0.jpg" />
						</p>
						<p className = "ReactIncluded-box-title">
							求智集
						</p>
						<p className = "ReactIncluded-box-intro">
							每天临睡前比清晨醒来时更智慧一点。
						</p>
						<a className = "ReactIncluded-box-link">进入专栏</a>
					</div>
					<div className = "ReactIncluded-box-listbox">
						<p className = "ReactIncluded-box-header">
						  <img src ="http://img5.imgtn.bdimg.com/it/u=2012368586,3454035391&fm=23&gp=0.jpg" />
						</p>
						<p className = "ReactIncluded-box-title">
							求智集
						</p>
						<p className = "ReactIncluded-box-intro">
							每天临睡前比清晨醒来时更智慧一点。
						</p>
						<a className = "ReactIncluded-box-link">进入专栏</a>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = ReactIncluded;