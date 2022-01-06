import React, { Component } from 'react';

export default class Count extends Component {
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
