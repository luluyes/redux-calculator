import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id:nanoid(),name,age}
    this.props.jiaren(personObj)
  }
  render() {
    console.log(this.props.persons)
    return (
      <div>
        <h2>我是Person组件,上方组件和为: {this.props.count}</h2>
        <input ref={c => this.nameNode = c}type="text" placeholder="请输入名字" />&nbsp;
        <input ref={c => this.ageNode = c}type="text" placeholder="请输入年龄" />&nbsp;
        <button onClick={this.addPerson}>添加</button>&nbsp;
        <ul>
          {
            this.props.persons.map(person => {
              return <li key={person.id}>{person.name}---{person.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    persons: state.rens, 
    count: state.he
  }),
  {
    jiaren: createAddPersonAction
  }
)(Person)
