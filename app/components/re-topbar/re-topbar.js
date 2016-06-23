/**
 * 组件名称: 顶部bar
 * 功能项: [1.承载页面导航 2.界面标题显示]
 * 交互像: 页面向上滑动消失向下滑动显示
 * by 代小星 
 */

/**
 * 更改日志:
 */

/**
 * 引入业务基本模板包
 */
import React , { Component } from 'react';
import { Link } from 'react-router';

/**
 * 引入对应less
 */
import Stylesheets from './re-topbar.less';

/**
 * 引入业务相关文件包
 */


/**
 * 组件开发
 */
export default class ReactTopbar extends Component {
	constructor(props) {
	    super(props)
	    this.state = {showMuen: false};
	}
    
    handleClick() { 
		this.setState({showMuen: !this.state.showMuen})
	}
    
    render() {
		var toggerShow = this.state.showMuen? "ReactTopbar-animationshow":"";
		return (
			<div className = "ReactTopbar-box">
				<a className ="ReactTopbar-box-logo icon-ic_zhihu_logo"></a>
				<div className="ReactTopbar-box-slidedown">
					<i className = "icon-ic_nav_more" onClick={this.handleClick}></i>
					<ul className = {toggerShow}>
						<li><Link to="/users">草稿</Link></li>
						<li><Link to="/zhuanlan">我的文章</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

