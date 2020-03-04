## node 02

## 通过express 框架书写api

#### 什么是api
  ajax 2007左右出现
  前后端分离 前端ajax 请求数据
  $.get('http://www.baidu.com/user/login?us=123&ps=456', (err, res) => {

  })

  通过api 接口实现数据的请求

  登录接口逻辑分析
  1. 接受用户传递数据
  2. 处理数据
  3. 返回数据

### express 基本使用

  1.安装express
  ```
  npm install express --save
  ```
  模块（第三方）的引用 从当前目录的node_modules 以此向上寻找

### 服务器相关

  服务器：
    1. 服务器就是一台电脑
    2. 服务器软件（apach tomcat-java iis-微软 nginx-linux node）
    3. 服务器ip和端口号（默认80）

  局域网：服务器通过网线（无线）连接 每一台电脑都会有一个ip
  外网：
  ip：确定服务器主机的位置
  port：确定服务器里某一个程序


### api接口的书写
  + 接受数据
    - get  req.query
    - post req.body 需要body-parser 插件进行解析
      + 注意数据格式 1.json  2.x-www-form-urencode  3.formdata

### postman 接口测试

### 中间件 middlewear
  + 内置中间件 static
  + 自定义中间件 (全局 局部)
  + 第三方中间件 (body-parser) (拦截器)

  中间件使用 一定要注意在合适的地方next()

### 静态资源目录 static
  指定一个目录 目录可以被访问 apache (www)

### 非关系数据库（文档） mongodb

#### 安装
  1. 下载
  2. 安装
    + 最后一个勾不选
    + 缺少数据库文件 c/data/db
    + 不是内部命令 需要设置环境变量 mongod 的bin 目录路径

#### 指令
  mongodb 数据库名
  mongod 命令行启动数据库命令
  mongo 命令行操作数据库指令
  mongoose   node操作数据库的插件