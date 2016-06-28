/**
 * 专栏action
 * by 代小星
 */

 import {fetchDataAsynczhuanlanIndex} from "../api/Index_Async.js"
 
function gitZhuanlanList_index(list) {
	return {
	    type: "GETZHUANLAN",
	    list: list
	}
}

export let getzhuanlanlist = function() {
  return dispatch => {
    fetchDataAsynczhuanlanIndex(list => {
      dispatch(gitZhuanlanList_index(list))
    })
  }
}

 
