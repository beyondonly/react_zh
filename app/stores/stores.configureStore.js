/**
 * ！！！！改模块禁止更改 ！！！
 */


/**
 * 唯一store
 * by代小星
 */

/**
 * 引入业务基本模板包
 */
import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'


/**
 * 导入业务开发模块
 */
import rootReducer from "../reducers/appReducer.js"

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

let store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

module.exports = store;