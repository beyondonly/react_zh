
const initialState = {
	ZHUANLANDATE:[]
}

function ReIndexzhuanlan(state = [], action) {
   switch (action.type) {
      case "GETZHUANLAN": 
        return Object.assign({}, state, {
	        ZHUANLANDATE:action.list
	      })
      default:
       return state
   }
}

module.exports = ReIndexzhuanlan


