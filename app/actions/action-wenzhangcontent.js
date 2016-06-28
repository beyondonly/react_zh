/**
 * 首页文章列表
 * by 代小星
 */

import { fetchDataAsyncwenzhangcontent } from "../api/Index_Async.js";
 
function getwenzhangcontent(content) {
	return {
	    type: "GETWENZHANGINDEX",
	    content: content
	}
}

export let getfasycwenzhangcontent = function() {
  return dispatch => {
    fetchDataAsyncwenzhangcontent(content => {
      dispatch(getwenzhangcontent(content))
    })
  }
}


 
