/**
 * 首页专栏数据接口
 */

//首页文章专栏接口
export let fetchDataAsynczhuanlanIndex = function(callback) {
    $.getJSON('http://127.0.0.1:3000/indexListgetZhuanlan?limit=8&offset=8',function(json, textStatus) {
  	   callback(json);
  	});
}

//首页文章数据接口
export let fetchDataAsyncwenzhangIndex = function(callback) {
    $.getJSON('http://127.0.0.1:3000/indexListWenzhang?limit=8&offset=8',function(json, textStatus) {
  	   callback(json);
  	});
}

//文章内容获取
export let fetchDataAsyncwenzhangcontent = function(callback) {
	$.getJSON('http://127.0.0.1:3000/getWenzhangText?Id=20808659',function(json, textStatus) {
  	   callback(json);
  	});
}

//评论数据获取
export let ferchDatacomments = function(callback) {
	$.getJSON('http://127.0.0.1:3000/getWenzhangTextcomments',function(json, textStatus) {
  	   callback(json);
  	});
}

//获取文章收录数据
export let fetchDataAsyncwenzhangshoulu = function(callback) {
  $.getJSON('http://127.0.0.1:3000/getWenzhangTextcontributed',function(json, textStatus) {
       callback(json);
    });
}

//推荐阅读
export let ferchDatarecommendations = function(callback) {
  $.getJSON('http://127.0.0.1:3000/recommendations',function(json, textStatus) {
       callback(json);
  });
}

//专栏信息获取
export let getzhuanlaninfo = function(callback) {
  $.getJSON('http://127.0.0.1:3000/getZhuanlanInfo',function(json, textStatus) {
       callback(json);
  });
}

//获取专栏文章
export let getzhuanlanwenzhang = function(callback) {
  $.getJSON('http://127.0.0.1:3000/getZhuanlanposts',function(json, textStatus) {
       callback(json);
  });
}

