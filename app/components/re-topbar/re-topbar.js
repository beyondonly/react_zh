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
import classnames from 'classnames'

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
	    this.state = {
	    	showBell: false, //导航是否显示
	    	fixed: false,//是否固定顶部
	    	showbar: true //是否显示顶部
	    }; 
	}
    
    handleClick(e) {
    	e.stopPropagation();
		this.setState({showBell: !this.state.showBell})
	}

	handleHide() {
		this.setState({showBell: false})
	}

	handleTopbarfixed() {
	   this.setState({fixed: true})
	}

	handleTopbarnofixed() {
	   this.setState({fixed: false})
	}

	handleTopbarShow() {
		this.setState({showbar: true})
	}

	handleTopbarHide(){
		this.setState({showbar: false})
	}

    render() {
		return (
			<div className = {classnames({
					'Rt-topbar':'Rt-topbar',
					'Rt-topbar-ui-fexd':this.state.fixed,
					'Rt-topbar-ui-hide':!this.state.showbar,
					'Rt-topbar-ui-show':this.state.showbar
				})}>
				<a className ="logo-link">
					<i className = "icon-ic_zhihu_logo"></i>
				</a>
				<div className = "titlename">
					<div className = "titleName-one">
						<p>草稿</p>
					</div>
					<div className = "titleName-tow">
						<p className = "bigfont">首发于</p>
						<p>星海航迹</p>
					</div>
				</div>
				<div className="slidebox">
					<p className = "slidebox-icon" onClick = {this.handleClick.bind(this)}>
					   <i className = "icon-ic_nav_more"></i>
					</p>
					<ul className = {classnames({'list-box':'list-box',animation_slidedown:this.state.showBell})}>
						<li><Link to="/users">草稿</Link></li>
						<li><Link to="/zhuanlan">我的文章</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

