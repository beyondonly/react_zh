
const initialState = {
	WENZHANG:[]
}

function ReIndexwenzhang(state = [], action) {
   switch (action.type) {
      case "GETWENZHANGINDEX": 
        return Object.assign({}, state, {
	        WENZHANG:action.list
	      })
      default:
       return state
   }
}

module.exports = ReIndexwenzhang
