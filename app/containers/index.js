/**
 * pagename {首屏页面}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

//库引入
var React = require('react');
var ReactDOM = require('react-dom');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
var action = require("../actions/action-zhuanlan.js")

//组件引入
var ReactTopbar = require('../components/re-topbar/re-topbar.js');
var Index_bg = require('../components/index_bg/index_bg.js');
var Reactariticlist1 = require("../components/re-articlist1/re-articlist1.js");
var Indexfooter = require("../components/index_footer/index_footer.js");
import Reactariticlist from '../components/re-articlist/re-articlist'
var IndexPage = React.createClass({
	render: function() {
		const { dispatch} = this.props
		return (
	        <div>
			 	<Index_bg />
			 	<Reactariticlist array={this.props.array}/>
			 	<Reactariticlist1 />
			 	<Indexfooter />
			</div>
		)
	}
})

export default connect()(IndexPage);

