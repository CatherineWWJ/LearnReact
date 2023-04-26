// App 父组件  Son 子组件
import React from "react";

// 函数式的Son
function SonF(props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  return (
    <div>我是函数式子组件{props.msg}</div>
  )
}

// 类组件的Son
class SonC extends React.Component {
  render() {
    return (
      // 类组件必须通过this关键词去获取  这里的props是固定的
      <div>我是类子组件{this.props.msg}</div>
    )
  }
}

// 父组件需要给子组件传递参数，只有类组件才有状态！
class App extends React.Component {
  // 1.准备数据
  state = {
    message: 'this is a message'
  }
  render() {
    return (
      <div>
        {/* 2.子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF msg={this.state.message}></SonF>
        <SonC msg={this.state.message}></SonC>
      </div>
    )
  }
}

export default App;