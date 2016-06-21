/**
 * pagename {首屏页面}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

//库引入
var React = require('react');
var ReactDOM = require('react-dom');

//组件引入
var ReactTopbar = require('../components/re-topbar/re-topbar.js');
var Index_bg = require('../components/index_bg/index_bg.js');
var Reactariticlist = require("../components/re-articlist/re-articlist.js");
var Reactariticlist1 = require("../components/re-articlist1/re-articlist1.js");
var Indexfooter = require("../components/index_footer/index_footer.js");

//数据引入
var ZhuanlanReducers = require("../stores/stores.configureStore.js");
var Provider = require("react-redux");

var api = require("../api/Index_zhuanlan.js")

var state = ZhuanlanReducers();
api()(state.dispatch)

var IndexPage = React.createClass({
	render: function() {
		return (
	        <div>
			 	<Index_bg />
			 	<Reactariticlist/>
			 	<Reactariticlist1 />
			 	<Indexfooter />
			</div>
		)
	}
})

module.exports = IndexPage;

