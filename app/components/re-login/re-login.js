/**
 * 文章列表 by fengchuatao 
 */


/**
 * 导入业务基础模块
 */

import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';

/*
* 导入样式
*/
import StyleSheet from "./re-login.less"
import pJSfuntion from "./particlesconfig.js"


/**
 * 组件开发
 */
export default class ReactTopbar extends Component {
	componentDidMount() {
		console.log(pJSfuntion())
	}

	render() {
		return(
			<div className="re-login">
				<div className="re-login-box">
					<div className="index-header">
						<h1 className="logo"></h1>
						<h2 className="subtitle">与世界分享你的知识、经验和见解</h2>
					</div>
					<div className="sign-box">
						<div className="index-tab-navs">
							<a href="#">登录</a>
							<a href="#">注册</a>
							<span className="slideborder"></span>
						</div>
					</div>
					<div className="view-sing">
						<form>
							<div className = "group-inputs">
								<div className="emailbox input-wrapper">
									<input placeholder="邮箱或者手机号"></input>
								</div>
								<div className="password input-wrapper">
									<input placeholder="密码"></input>
								</div>
							</div>
							<div className="button-wrapper command">
								<button className="sign-button submit" type="submit">登录</button>
							</div>
							<div className="signin-misc-wrapper">
								<label className="remember-me">
									<input type="checkbox" name="remember_me"  value="true" /> 记住我
								</label>
								<a className="unable-login" href="#">无法登录?</a>
							</div>
							<div className="weibo-signup-wrapper">
								<span className="name js-toggle-sns-buttons">社交帐号登录</span>
								<div className="sns-buttons">
									
								</div>
							</div>
						</form>
					</div>
					<div className="AppPromotionBar GaussianBlur">
						<div className="AppPromotionBar-icon"></div>
						<p className="AppPromotionBar-title">知乎</p>
						<p className="AppPromotionBar-describe">来知乎，参与讨论</p>
						<a className="AppPromotionBar-downloadButton" href="http://api.zhihu.com/client/download?ct=mobileweb_home_downloadlink&amp;utm_source=weidengluyemian&amp;utm_medium=mobile_download_app_button&amp;utm_campaign=downloadlink">点击下载</a>
				    </div>
				</div>
				<div className="re-canvasbg" id="particles-js" >
					<canvas className="particles-js-canvas-el"></canvas>
				</div>
			</div>
		)
	}
}