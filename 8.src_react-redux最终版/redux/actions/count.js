/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from '../constants'

export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})

export const incrementAsync = (data, time) => {
  // 返回一个函数
  return (dispatch) => {
    setTimeout(()=>{
      // 通知redux进行加法计算
      dispatch(increment(data))
    },time)
  }
}