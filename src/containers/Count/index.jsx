import React, { Component } from 'react';
import {connect} from 'react-redux';
// 引入action
import {
  increment, 
  decrement,
  incrementAsync
} from '../../redux/actions/count'


// UI组件
class Count extends Component {

  increment = () => {
    const {value} = this.selectNumber;
    this.props.increment(value*1)
  }

  decrement = () => {
    const {value} = this.selectNumber;
    this.props.decrement(value*1)
  }

  increseIfOdd = () => {
    const {value} = this.selectNumber;
    if(this.props.count%2 !== 0){
      this.props.increment(value*1)
    }
  }
  
  // 异步加
  increaseAsync = () => {
    const {value} = this.selectNumber;
    this.props.incrementAsync(value*1,1000)
    
  }
  render() {
    
    return (
      <div>
        <h2>我是Count组件, 下方组件总人数为:{this.props.headCounts}</h2>
        <h4>当前求和为: {this.props.count}</h4>
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
export default connect(
  state => ({
    count:state.count, 
    headCounts:state.persons.length
  }),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count)