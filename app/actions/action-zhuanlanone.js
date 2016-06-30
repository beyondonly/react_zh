/**
 * 个人专栏action
 * by 代小星
 */

import { getzhuanlaninfo ,getzhuanlanwenzhang} from "../api/Index_Async.js";
 
 //获取专栏信息
function getzhuanlanoneinfo(content) {
	return {
	    type: "GETZHUANLANUSER",
	    content: content
	}
}

//获取专栏文章
function getwenzhangwenzhangaction(list) {
	return {
	    type: "GETZHUANLANWENZHANG",
	    list: list
	}
}

//获取专栏信息
export let getwenzhangList = function(slug) {
  return dispatch => {
    getzhuanlaninfo(slug,content => {
      dispatch(getzhuanlanoneinfo(content))
    })
  }
}

//获取专栏文章
export let getwenzhangwenzhangfn = function(slug) {
  return dispatch => {
    getzhuanlanwenzhang(slug,content => {
      dispatch(getwenzhangwenzhangaction(content))
    })
  }
}