/**
 * 专栏接口
 */

 import $json from "../api/Index_Async.js"
 
function receivelist(list) {
	return {
	    type: "GETLIST",
	    list: list
	}
}

function getAllList() {
  return dispatch => {
    $json(list => {
      dispatch(receivelist(list))
    })
  }
}

module.exports = getAllList
 
