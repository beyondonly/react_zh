/**
 * pagename {首页推荐列表}
 * form {我叫代小星}
 * email {fengchuantao@baidu.com}
 */

export const INIT_DATA = 'INIT_DATA'; //初始化数据
export const CHANGE_DATA = 'CHANGE_DATA'; //更改数据


/*
 * action 创建函数
 */

export function initdata(text) {
  return { type: INIT_DATA, text }
}

export function changedata(index) {
  return { type: CHANGE_DATA, index }
}

