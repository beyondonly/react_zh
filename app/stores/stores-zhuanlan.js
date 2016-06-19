var createStore = require('redux').createStore;
var ZhuanlanReducer = require("../reducers/reducers-zhuanlan.js")

function ZhuanlanStore(initState){
  return createStore(ZhuanlanReducer,initState); // 初始化创建
}
module.exports = ZhuanlanStore;