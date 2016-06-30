/**
 * 首页专栏数据接口
 */

var IP = "http://127.0.0.1:3000/";
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
export let fetchDataAsyncwenzhangcontent = function(url,callback) {
  var getlink = IP+"getWenzhangText?Id="+url;
	$.getJSON(getlink,function(json, textStatus) {
  	   callback(json);
  	});
}

//评论数据获取
export let ferchDatacomments = function(url,callback) {
  var getlink = IP+"getWenzhangTextcomments?Id="+url;
	$.getJSON(getlink,function(json, textStatus) {
  	   callback(json);
  	});
}

//获取文章收录数据
export let fetchDataAsyncwenzhangshoulu = function(url,callback) {
  var geturl = IP+"getWenzhangTextcontributed?id="+url
  $.getJSON(geturl,function(json, textStatus) {
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
export let getzhuanlaninfo = function(slug,callback) {
  var getlink = IP+"getZhuanlanInfo?slug="+slug;
  $.getJSON(getlink,function(json, textStatus) {
       callback(json);
  });
}

//获取专栏文章
export let getzhuanlanwenzhang = function(slug,callback) {
  var getlink = IP+"getZhuanlanposts?slug="+slug
  $.getJSON(getlink,function(json, textStatus) {
       callback(json);
  });
}

