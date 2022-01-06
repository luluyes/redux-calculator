import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

// 监测redux中状态的改变
// redux中状态有变时，整个app（<App/>组件）都会重新render一次（diff算法保证只re-render发生变化的组件）
store.subscribe(() => {
  ReactDOM.render(<App/>,document.getElementById('root'))
})
