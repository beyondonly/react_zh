/**
 * 首页专栏数据接口
 */

//首页文章专栏接口
function fetchDataAsynczhuanlanIndex(callback) {
    $.getJSON('http://127.0.0.1:3000/indexListgetZhuanlan?limit=8&offset=8',function(json, textStatus) {
  	   callback(json);
  	});
}

//首页文章数据接口
function fetchDataAsyncwenzhangIndex(callback) {
    $.getJSON('http://127.0.0.1:3000/indexListWenzhang?limit=8&offset=8',function(json, textStatus) {
  	   callback(json);
  	});
}

module.exports = fetchDataAsynczhuanlanIndex;



