import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

// redux中状态有变时，整个app都会重新render一次（diff算法保证只re-render发生变化的组件）
store.subscribe(() => {
  ReactDOM.render(<App/>,document.getElementById('root'))
})
