const initialStateContent = {
	WENZHANG:{}
}

const initialStateComment= {
  commentlist:[]
}

const initialStateShoulu= {
  Shoulu:[]
}

const initialStaterecommenlist = {
  recommenlist:[]
}

//文章内容
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

//评论列表
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

//文章被专栏收录
export let Regetcommentshoulu = function(state = initialStateShoulu, action) {
   switch (action.type) {
      case "GETshoulu": 
        return Object.assign({}, state, {
          Shoulu:action.list
        })
      default:
       return state
   }
}

//相关推荐
export let Rerecommendations = function(state = initialStaterecommenlist, action) {
   switch (action.type) {
      case "RECOMMENT": 
        return Object.assign({}, state, {
          recommenlist:action.list
        })
      default:
       return state
   }
}