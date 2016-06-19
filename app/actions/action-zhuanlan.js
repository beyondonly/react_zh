/**
 * 数据action
 */

var API = require("../api/Index_zhuanlan.js");

var ACTION_ZHUANLAN  = {};

ACTION_ZHUANLAN.getdata = function(dispatch, getState) {
	API.getZhuanlan(8,8,function(data) {
		dispatch({
            type: 'DONE_Getlist',
            payload: data
        }); 
	})
}
