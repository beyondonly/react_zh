var express = require('express');
var router = express.Router();
var nodegrass = require('nodegrass')
var https = require('https');
var jsdom = require("cheerio")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.set('Access-Control-Allow-Origin','*');
    weixin("https://zhuanlan.zhihu.com/api/posts/20775144",function(data){
        res.json({"html":data})
    })
	
});


function weixin(codecode,callback) {
    nodegrass.get(codecode,function(data,status,headers){
        var access_token_info = JSON.parse(data);
        var html = access_token_info;
        callback(html)
    },'utf8').on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}

module.exports = router;
