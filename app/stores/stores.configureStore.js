var createStore = require("redux").createStore;
var rootReducer = require("../reducers/reducers-zhuanlan.js");
var action = require("../actions/action-zhuanlan.js")
var api = require("../api/Index_zhuanlan.js")

function configureStore(initialState) {
  var  store = createStore(rootReducer, initialState);
  return store;
}

module.exports = configureStore;