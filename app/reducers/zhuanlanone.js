/**
 * 专栏个人信息
 * @type {Object}
 */
const initialStatezhualaninfo = {
	zhualaninfo:{}
}


const initialStatezhualanwenzhang = {
	zhualanwenzhang: []
}
export let Rezhuanlaninfo = function (state = initialStatezhualaninfo, action) {
   switch (action.type) {
      case "GETZHUANLANUSER": 
        return Object.assign({}, state, {
	        zhualaninfo:action.content
	      })
      default:
       return state
   }
}

export let Rezhuanlanwenzhang = function (state = initialStatezhualanwenzhang, action) {
   switch (action.type) {
      case "GETZHUANLANWENZHANG": 
        return Object.assign({}, state, {
	        zhualanwenzhang:action.list
	      })
      default:
       return state
   }
}



