import {ADD_PERSON} from '../constants'

const initState = [{id:'001',name: 'Tom', age:18}]
export default function personReducer(preState=initState,action){
  const {type,data} = action;
  switch(type){
    case ADD_PERSON:
      // 不要用push，unshift去修改数组。因为数组的地址没有变，页面不会更新
      // 不要用push，unshift去修改数组。因为这样会改变preState，personReducer不再是纯函数（会影响页面的更新）
      return [data,...preState]
    default:
      return preState
  }
}