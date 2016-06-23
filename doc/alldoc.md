# react架构及规范

> by 封传梼 2016/06/22

### 技术选型:

1. 样式: less
2. 前端显示: react
3. 数据架构方式: redux
4. 路由: react-route(单页SPA模式)
5. 中间层node
6. 自动化构建webpack+fis3(待定)
7. js书写方式 ECM6

### 项目必须项

1. 代码必须打包加密
2. 静态资源必须上传cdn
3. js书写严格按照ECM6标准书写
4. 图片需压缩上传
5. 静止重写base文件基础样式
6. 所有图片严格按照惰性加载禁止同步加载
7. 文件引入方式务必采用ECM6方式禁止require引入
7. 所有代码务必三级cr--开发者>>项目负责人>>代码分支合并者

### 项目架构目录规范

app                 #开发目录
|   |
|   ├──actions          #action的文件
|   |
|   ├──components     #所有组件
|   |
|   ├──containers       #容器组件(页面组装)
|   |
|   ├──reducers         #reducer文件
|   |
|   ├──stores           #store配置文件
|   |
|   └──index.js         #入口文件
|
├── dist                #发布目录
├── node_modules        #包文件夹
├── webpack.config.js   #webpack配置文件
└── package.json

### 组件书写规范

#### react组件开发规范

> 模板

```
/**
 * 组件名称: 顶部bar
 * 功能项: [1.承载页面导航 2.界面标题显示]
 * 交互像: 页面向上滑动消失向下滑动显示
 * by 代小星 
 */

/**
 * 更改日志:
 */

/**
 * 引入业务基本模板包
 */
import React , { Component } from 'react';
import { Link } from 'react-router';

/**
 * 引入对应less
 */
import Stylesheets from './re-topbar.less';

/**
 * 引入业务相关文件包
 */


/**
 * 组件开发
 */

export default class ReactTopbar extends Component {
	constructor(props) {
	    super(props)
	    //处理 state	
	}
    
    render() {
		return (
		)
	}
}
```

> 样式

```
/* 
* topbar样式表
* by 代小星
 */

/*
* 预置变量
 */
```

**所有颜色,背景图片务必预置变量**

