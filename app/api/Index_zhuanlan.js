/**
 * 首页专栏数据接口
 */
var action = require("../actions/action-zhuanlan.js");

function fetchDataAsync() {
  return function (dispatch) {
  	$.getJSON('http://127.0.0.1:3000/indexListgetZhuanlan?limit=8&offset=8',function(json, textStatus) {
  	   dispatch(action(json));
  	});
  }
}
module.exports = fetchDataAsync;



