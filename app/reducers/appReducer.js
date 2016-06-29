/**
 * reducer集合处理
 * by 代小星 
 * 所有的组件的reducer放在这里
 */

/**
 * 引入业务基础包
 */
import {combineReducers} from "redux"


/**
 * 导入所有的reducers
 */

import ReIndexzhuanlan from "./zhuanlan-index.js";
import ReIndexwenzhang from "./wenzhang-index.js";
import {ReWenzhangContent,Regetcommentlist,Regetcommentshoulu,Rerecommendations} from "./wenzhang-content.js";
import { Rezhuanlaninfo ,Rezhuanlanwenzhang} from "./zhuanlanone.js"
 

export default combineReducers({
  ReIndexzhuanlan,
  ReIndexwenzhang,
  ReWenzhangContent,
  Regetcommentlist,
  Regetcommentshoulu,
  Rerecommendations,
  Rezhuanlaninfo,
  Rezhuanlanwenzhang
})
