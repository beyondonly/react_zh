/**
 * 首页文章列表
 * by 代小星
 */

import { fetchDataAsyncwenzhangIndex } from "../api/Index_Async.js";
 
function getwenzhangindex(list) {
	return {
	    type: "GETWENZHANGINDEX",
	    list: list
	}
}


export let getwenzhangList = function() {
  return dispatch => {
    fetchDataAsyncwenzhangIndex(list => {
      dispatch(getwenzhangindex(list))
    })
  }
}


 
