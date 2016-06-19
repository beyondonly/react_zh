/**
 * 首页专栏数据接口
 */
var API = {};

API.getZhuanlan = function(limit,offset,callback) {
	$.get("http://127.0.0.1:3000/indexListgetZhuanlan",{"limit":limit,"offset":offset},function(data){
		callback(data)
	})
}

module.exports = API;
