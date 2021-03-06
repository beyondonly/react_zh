/**
 * 业务主入口
 * by代小星
 */

/**
 * 引入业务基本模板包
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider,connect} from 'react-redux'
import { Router, Route, Link,hashHistory,IndexRoute } from 'react-router'


/**
 * 引入业务开发模块 
 */

import store from "./stores/stores.configureStore.js"


/**
 * 引入各个基础页面
 */
import IndexPage from './containers/index.js';
import Wenzhang from './containers/wenzhang.js';
import Zhuanlan from './containers/zhuanlan.js';
import Topbar from "./components/re-topbar/re-topbar.js";
import Login from "./containers/login.js"

/**
 * 导入base样式表
 */
import Basecss from "./iframe/public/reset.less"

/**
 * 项目路由控制及渲染
 */

let rootElement = document.getElementById('zh-react')

let App = React.createClass({
	getInitialState:function(){
		return {
			windowClient:0
		};
	},
	componentDidMount: function(){
		window.addEventListener('scroll', this.handleronSroll);
	},
	handlerclick: function() {
		this.refs.Topbar.handleHide()
	},
	handleronSroll:function(){
		var Topbar = document.body.scrollTop;
		if(Topbar<60) { //小于60
			this.refs.Topbar.handleTopbarnofixed();
			this.refs.Topbar.handleTopbarShow();
			return
		};

		this.refs.Topbar.handleTopbarfixed()
		if(Topbar > this.state.windowClient) { //大于上一次
			this.refs.Topbar.handleTopbarHide()
		}else { //小于上一次
			this.refs.Topbar.handleTopbarShow()
		}

		this.setState({windowClient:Topbar});
	},
	render: function() {
		return (
			<div onClick = {this.handlerclick} >
				<Topbar ref="Topbar"/>
				{this.props.children}
			</div>
		)
	}
})

/**
 * 全局路由
 * 针对项目不同可手动配置
 */
ReactDOM.render(
  <Provider store={store}>
 	  <Router history={hashHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={IndexPage}/>
	      <Route path="zhuanlan/:slug" component={Zhuanlan} />
		  <Route path="wenzhang/:url" component={Wenzhang} />
		  <Route path="login" component={Login} />
	    </Route>
	  </Router>
  </Provider>,
  rootElement
)

 


 




