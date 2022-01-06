/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from './constants'


// const createIncrementAction = data => {
//   return {type:'increment',data}
// }
// 返回值为对象并只有一行代码的简写：
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

// 异步action：就是指action的值为function（同步的话，返回的是一个对象）。异步action中一般会调用同步action。
// 异步action不是一定要用的
export const createIncrementAsyncAction = (data, time) => {
  // 返回一个函数
  return (dispatch) => {
    setTimeout(()=>{
      // 通知redux进行加法计算
      dispatch(createIncrementAction(data))
    },time)
  }
}