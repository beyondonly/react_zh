var combineReducers = require("redux").combineReducers;
var ACTION_zhuanlan = require("../actions/action-zhuanlan.js");
var ReduxThunk = require('redux-thunk').default;
var API = require("../api/Index_zhuanlan.js")

const ZHUANLANDATE = []

function REDUCERS_zhuanlan(state = [], action) {
   switch (action.type) {
      case "GETLIST": 
        return Object.assign({}, state, {
            ZHUANLANDATE : action.data
        })
      default:
       return state
   }
}

const ZHUANLANApp = combineReducers({
  REDUCERS_zhuanlan
})

module.exports = ZHUANLANApp; 
