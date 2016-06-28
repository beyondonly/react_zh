/**
 * 首页文章列表
 * by 代小星
 */

import { fetchDataAsyncwenzhangcontent,ferchDatacomments } from "../api/Index_Async.js";
 
//获取文章主体内容
function getwenzhangcontent(content) {
	return {
	    type: "GETWENZHANGINDEX",
	    content: content
	}
}


//获取文章评论数据
function getcomments(list) {
   return {
	    type: "GETCOMMENTS",
	    list: list
	}
};

//获取文章主体
export let getDataAsyncwenzhangcontent = function() {
  return dispatch => {
    fetchDataAsyncwenzhangcontent(content => {
      dispatch(getwenzhangcontent(content))
    })
  }
}

export let getfasycwenzhangcomment = function() {
  return dispatch => {
    ferchDatacomments(list => {
      dispatch(getcomments(list))
    })
  }
}
 
