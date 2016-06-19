app                 #开发目录
|   |   
|   ├──actions          #action的文件
|   |   
|   ├──components       #内部组件
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
├── .gitignore     
├── .jshintrc      
├── server.js           #本地静态服务器(没有)      
├── webpack.config.js   #webpack配置文件
└── package.json

redux架构方案

action：就是灯的变化，"红变绿"等，用名词表述
state：就是灯的名字，红灯、绿灯等，用名词表述
reducer：就是灯的变化规则，红灯之后是绿灯等，用状态转移表述，归根到底也是名词
store：就像是交警，执行上述的交通规则；



http://www.w3ctech.com/topic/1561