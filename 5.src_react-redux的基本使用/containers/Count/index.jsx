// 引入Count的UI组件
import CountUI from '../../components/Count';
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

// 1.mapStateToProps函数返回的是一个对象（键值对）
// 2.返回的对象中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value
// 3.mapStateToProps用于传递redux中储存的状态（state）
function mapStateToProps(state) {
  return {count:state}
}

// 1.mapDispatchToProps函数返回的是一个对象（键值对）
// 2.返回的对象中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value（value是一个function）
// 3.mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps(dispatch){
  return {
    // 通知redux执行加法
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
  }
}

// 使用connect()(),将容器组件和CountUI组件相连，并暴露新的UI组件
// 作为父组件，给子组件传递参数的方式：通过两个返回值为键值对的函数，作为connect（）的参数
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)