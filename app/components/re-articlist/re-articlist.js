/**
 * 文章列表 by fengchuatao 
 */

import React, { Component, PropTypes } from 'react';
var ReactchangeButton = require("../re-changebuttn/re-changebuttn.js");

require('./re-articlist.less');


export default class Reactariticlist extends Component {
  render() {
    return (
			<div className = "re-articlist-box">
				<h2><span>专栏 · 发现</span></h2>
				<div className= "re-articlist-box-list">
					{this.props.array.map((alist, index) =>
				        <div className = "re-articlist-box-listone" key={index}>
							<p className = "re-articlist-box-header"><img src={alist.avatar} /></p>
							<p className = "re-articlist-box-title">{alist.name}</p>
							<p className = "re-articlist-box-description">{alist.description}</p>
							<p className = "re-articlist-box-link ">
								<a>进入专栏</a>
							</p>
						</div>
			        )}
				</div>
				<ReactchangeButton />
			</div>
		)
  }
}



