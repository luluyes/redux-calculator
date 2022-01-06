/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from '../constants'

export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

export const createIncrementAsyncAction = (data, time) => {
  // 返回一个函数
  return (dispatch) => {
    setTimeout(()=>{
      // 通知redux进行加法计算
      dispatch(createIncrementAction(data))
    },time)
  }
}