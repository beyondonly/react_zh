const initialStateContent = {
	WENZHANG:{}
}

const initialStateComment= {
  commentlist:[]
}

export let ReWenzhangContent = function(state = initialStateContent, action) {
   switch (action.type) {
      case "GETWENZHANGINDEX": 
        return Object.assign({}, state, {
	        WENZHANG:action.content
	      })
      default:
       return state
   }
};

export let Regetcommentlist = function(state = initialStateComment, action) {
   switch (action.type) {
      case "GETCOMMENTS": 
        return Object.assign({}, state, {
	        commentlist:action.list
	      })
      default:
       return state
   }
}

