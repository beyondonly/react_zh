import React from 'react'
import ReactDOM from 'react-dom'
import 

var App = React.createClass({
	render: function() {
		return (
		    <div className="AppBox">
				<Topbar />
				{this.props.children}
			</div>
		)
	}
})

ReactDOM.render((
 <Router history={hashHistory}>
	<Route  path="/" component={App} >
	    <IndexRoute component={IndexPage}/>
		<Route path="index" component={ IndexPage } />
		<Route path="users" component={ Wenzhang } />
		<Route path="zhuanlan" component={ Zhuanlan }/>
	</Route>
 </Router>
), document.getElementById('zh-react'));