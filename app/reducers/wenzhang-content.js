const initialState = {
	WENZHANG:{}
}

function ReIndexwenzhang(state = initialState, action) {
   switch (action.type) {
      case "GETWENZHANGINDEX": 
        return Object.assign({}, state, {
	        WENZHANG:action.content
	      })
      default:
       return state
   }
}

module.exports = ReIndexwenzhang
