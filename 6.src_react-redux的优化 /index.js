import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import store from './redux/store'
import store from "./redux/store";
import {Provider} from "react-redux"

ReactDOM.render(
  // 这样写后代组件都可以共享store，无需意义传入props（store）
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

// 监测redux中状态的改变
// redux中状态有变时，整个app（<App/>组件）都会重新render一次（diff算法保证只re-render发生变化的组件）
// 使用react-redux的话，无需监测
// store.subscribe(() => {
//   ReactDOM.render(<App/>,document.getElementById('root'))
// })
