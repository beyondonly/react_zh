/**
 * pagename {首屏页面}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

//库引入
var React = require('react');
var ReactDOM = require('react-dom');

//组件引入
var ReactTopbar = require('../components/re-topbar/re-topbar.jsx');
var Index_bg = require('../components/index_bg/index_bg.jsx');
var Reactariticlist = require("../components/re-articlist/re-articlist.jsx");
var Reactariticlist1 = require("../components/re-articlist1/re-articlist1.jsx");
var Indexfooter = require("../components/index_footer/index_footer.jsx");

//数据引入
var ZhuanlanReducers = require("../stores/stores-zhuanlan.js");
var Provider = require("react-redux");

console.log(ZhuanlanReducers)

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

