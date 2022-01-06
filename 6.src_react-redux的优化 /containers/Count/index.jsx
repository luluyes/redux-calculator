import React, { Component } from 'react';
// 引入redux的核心store (其实容器组件的store不能这样引入，需要作为props引入)
// import store from '../../redux/store';
// 引入connect用于链接UI组件与redux
import {connect} from 'react-redux';
// 引入action
import {
  createIncrementAction, 
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'


// UI组件
class Count extends Component {
  // 用redux时，组件仍可持有自己的state
  state = {carName:'Benz'};


  increment = () => {
    const {value} = this.selectNumber;
    this.props.jia(value*1)
  }

  decrement = () => {
    const {value} = this.selectNumber;
    this.props.jian(value*1)
  }

  increseIfOdd = () => {
    const {value} = this.selectNumber;
    if(this.props.count%2 !== 0){
      this.props.jia(value*1)
    }
  }
  
  // 异步加
  increaseAsync = () => {
    const {value} = this.selectNumber;
    this.props.jiaAsync(value*1,1000)
    
  }
  render() {
    console.log('UI组件接收到的props是: ', this.props)
    return (
      <div>
        <h1>当前求和为: {this.props.count}</h1>
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

// 容器组件
// 使用connect()(),将容器组件和CountUI组件相连，并暴露新的UI组件
// 作为父组件，给子组件传递参数的方式：通过两个返回值为键值对的函数，作为connect（）的参数
export default connect(
  state => ({count:state}),
  
  //mapDispatchToProps的一般写法
  // dispatch => ({
  //   // 通知redux执行加法
  //   jia: number => dispatch(createIncrementAction(number)),
  //   jian: number => dispatch(createDecrementAction(number)),
  //   jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
  // })

  //mapDispatchToProps的简写
  // react-redux API层面上的优化，只要写key：action，就会自动dispatch出去
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync:createIncrementAsyncAction,
  }
)(Count)