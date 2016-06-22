/**
 * get list data action 
 */

 var $json = require("../api/Index_zhuanlan.js");
 
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
 
