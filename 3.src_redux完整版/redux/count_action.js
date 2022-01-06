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