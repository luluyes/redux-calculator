## 1.redux学习案例（尚硅谷）

## 2.redux求和精简版：
  （1）.scr下建立redux文件夹
      -redux
        -store.js
        -count_reducer.js
  （2）store.js
      1)引入redux中的createStore函数，创建一个store
      2）createStore调用时要传入一个为其服务的reducer
      3）记得暴露store对象

  （3）count_reducer.js
      1) reducer本质是一个函数，接收：preState,action,返回加工后的状态
      2）reducer有两个作用，初始化状态，加工状态。
      3）reducer被第一次调用时，是store自动触发的:
         传递的preState是undefined
         传递的action是：{type：'@@REDUX/INIT_...<id>...'}

   (4)在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
      备注：redux只负责管理状态，至于状态的改变驱动着页面的展示需要我们自己写。

## 3.redux求和完整版：
  （1）添加actionCreator
  （2）添加action type的常量文件，方便管理


## 4.redux求和异步action版：
  （1）延迟的动作不想交给组件自身，想交给action
  （2）何时需要异步action：想要对状态进行操作，但具体的数据靠异步任务返回
  （3）步骤
       1）npm install redux-thunk,并配置在store中
       2）创建action的函数不在返回一般对象，而是一个函数，该函数中写异步任务；
       3）异步任务有结果后，分发一个同步的action去真正操作数据
       4）备注：异步action不是必须写的，完全可以自己等待异步任务结束了再去分发同步的action

## 5.react-redux的基本使用
   （1）明确两个概念：
       1）UI组件：不能使用任何redux的api，只负责页面的呈现，交互。
       2）容器组件：负责和redux通信，将结果交给UIzujian。
   （2）如何创建一个容器组件-----靠react-redux的connect函数
      connect(mapStateToProps,mapDispatchToProps)(UI组件)
        -mapStateTopProps:映射状态，返回值是一个对象
        -mapDispatchToProps:映射操作状态的方法，返回值是一个对象
   （3）备注1：容器组件中的store是靠props传递进去的，而不是在容器组件中直接引入
   （4）备注2：mapDispatchToProps，可以是一个方法，也可以是一个对象（react-redux的优化写法）
   

## 6.redux-react优化
    （1）容器组件和UI组件整合成一个文件
    （2）无需自己给容器组件意义传递store，给<App />包裹一个<Provider store={store}></Provider>即可
    （3）使用了react-redux后也不用再自己监测redux中状态的改变，容器组件可以自动完成这个工作
    （4）mapDispatchToProps也可以简单的写成一个对象
    （5）一个组件要和redux“打交道”要经过那几步？
         1）定义好UI组件----不暴露
         2）引入connect生成一个容器组件并暴露，写法如下：
           connect(
             state => ({key:value}), // 映射状态
             {key: xxxxAction} // 映射操作状态的方法
           )(UI组件)
         3）在UI组件中通过this.props.xxxxx读取状态和操作状态

## 8. 纯函数
    1.同样的输入，必定能得到同样的输出
    2.必须遵循以下约束
      1）不得改写参数数据
      2）不会产生任何副作用，例如网络请求，输入输出设备
      3）不能调用Date.now()或Math.random()等不纯方法
    3.redux的reducer一定是一个纯函数

## 9.高阶函数
    1. 参数是函数
    或
    2. 返回值为函数

## 10.打包
    1. npm run build
    2. 部署到服务器上：
       npm i server -g
    3. 将现目录的build文件夹作为根目录，启动服务器：
       npx serve build