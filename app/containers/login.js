/**
 * pagename {登录页面}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

/**
 * 引入业务基础模块
 */

import React from "react"
import { connect } from 'react-redux';

/*
* 组件
*/

import Loginpage from "../components/re-login/re-login.js";



var Login = React.createClass({
	render: function() {
		return (
	        <div>
			 	<Loginpage />
			</div>
		)
	}
})

module.exports = Login;



