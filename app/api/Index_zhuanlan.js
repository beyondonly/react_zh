/**
 * 首页专栏数据接口
 */
var action = require("../actions/action-zhuanlan.js");

function fetchDataAsync(callback) {
    $.getJSON('http://127.0.0.1:3000/indexListgetZhuanlan?limit=8&offset=8',function(json, textStatus) {
  	   callback(json);
  	});
}

module.exports = fetchDataAsync;



