var combineReducers = require("redux").combineReducers;

const initialState = {
	WENZHANG:[]
}

function ReIndexwenzhang(state = [], action) {
   switch (action.type) {
      case "GETLIST": 
        return Object.assign({}, state, {
	        ZHUANLANDATE:action.list
	      })
      default:
       return state
   }
}

module.exports = ReIndexwenzhang
