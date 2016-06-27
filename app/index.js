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
import Zhuanlane from './containers/zhuanlan.js';
import Topbar from "./components/re-topbar/re-topbar.js";

/**
 * 导入base样式表
 */
import Basecss from "./iframe/public/reset.less"



/**
 * 项目路由控制及渲染
 */

let rootElement = document.getElementById('zh-react')

let App = React.createClass({
	render: function() {
		return (
			<div>
				<Topbar />
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
 	<div>
 	  <Router history={hashHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={IndexPage} />
	      <Route path="users" component={Zhuanlane} />
		  <Route path="zhuanlan" component={Wenzhang} />
	    </Route>
	  </Router>
	</div>
  </Provider>,
  rootElement
)

 


 




