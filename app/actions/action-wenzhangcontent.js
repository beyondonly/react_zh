/**
 * 首页文章列表
 * by 代小星
 */

import { fetchDataAsyncwenzhangcontent,ferchDatacomments ,fetchDataAsyncwenzhangshoulu,ferchDatarecommendations} from "../api/Index_Async.js";
 
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

//文章收录action
function getcommentsShoulu(list) {
   return {
      type: "GETshoulu",
      list: list
  }
};

//推荐阅读
function recommendations(list) {
  return {
      type: "RECOMMENT",
      list: list
  }
}

//获取文章主体
export let getDataAsyncwenzhangcontent = function() {
  return dispatch => {
    fetchDataAsyncwenzhangcontent(content => {
      dispatch(getwenzhangcontent(content))
    })
  }
}

//获取评论数据
export let getfasycwenzhangcomment = function() {
  return dispatch => {
    ferchDatacomments(list => {
      dispatch(getcomments(list))
    })
  }
}

//获取收录数据
export let getwenzhangShoulu  = function() {
  return dispatch => {
    fetchDataAsyncwenzhangshoulu(list => {
      dispatch(getcommentsShoulu(list))
    })
  }
}

//推荐文档数据
export let actionrecommendations = function() {
  return dispatch => {
    ferchDatarecommendations(list => {
       dispatch(recommendations(list))
    })
  }
}
