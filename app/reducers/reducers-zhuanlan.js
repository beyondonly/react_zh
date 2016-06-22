var combineReducers = require("redux").combineReducers;

const initialState = {
	ZHUANLANDATE:[]
}

export function REDUCERS_zhuanlan(state = [], action) {
   switch (action.type) {
      case "GETLIST": 
        return Object.assign({}, state, {
	        ZHUANLANDATE:action.list
	      })
      default:
       return state
   }
}

export default combineReducers({
  REDUCERS_zhuanlan
})

