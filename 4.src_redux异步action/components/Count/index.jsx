import React, { Component } from 'react'
// 引用store，用于获取redux中保存的状态
import store from '../../redux/store'
// 引用actionCreator，专门用于创建action对象
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';

export default class Count extends Component {
  // 用redux时，组件仍可持有自己的state
  state = {carName:'Benz'};


  // componentDidMount () {
  //   // 监测redux中状态的变化，只要变化就触法subscribe()，就调用render
  //   store.subscribe(() => {
  //     // 虚晃一枪，但仍然会调render()
  //     this.setState({})
  //   })
  // }
  // 但此方法需要再各个用到redux的组件上都写，比较麻烦，可以直接把它包在<App/>外面，一旦redux状态有变，整个APP都要render一次
  //（但因为react的diff算法，不会造成效率低下问题）

  increment = () => {
    const {value} = this.selectNumber;
    // 通知redux加value
    store.dispatch(createIncrementAction(value*1))
  }

  decrement = () => {
    const {value} = this.selectNumber;
    store.dispatch(createDecrementAction(value*1))
  }
  increseIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0){
      store.dispatch(createIncrementAction(value*1))
    }
  }
  
  // 异步加
  increaseAsync = () => {
    const {value} = this.selectNumber;
    // 在组件上等0.5秒
    // setTimeout(()=>{
    //   store.dispatch(createIncrementAction(value*1))
    // },500)

    // 让redux等0.5秒再加
    store.dispatch(createIncrementAsyncAction(value*1,500))
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.increseIfOdd}>当和为奇再加</button>&nbsp;
        <button onClick={this.increaseAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
