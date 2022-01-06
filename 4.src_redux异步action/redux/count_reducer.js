/**
 * 1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
 * 2.reducer会接收到两个参数，分别为：之前状态（preState），动作对象（action）
 * 3.reducer是一个纯函数，不应加过多复杂的逻辑判断
 */

import {INCREMENT,DECREMENT} from './constants'
const initState = 0;
export default function countReducer(preState=initState,action){
  // 初始化的时候preState是undefined
  // if (preState === undefined) preState = 0;

  const {type,data} = action;
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      // 初始化的时候
      return preState
  }
}