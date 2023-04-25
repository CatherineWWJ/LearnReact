import React from "react";

class Counter extends React.Component {
  // 1.声明用来控制input value的react组件自己的状态
  state = {
    message: 'this is a message'
  }
  // 回调函数
  inputChange = (e) => { // 每次编辑input框都触发了该事件
    console.log('change事件触发了！', e);
    // 4.拿到input框最新的值 交给state message
    this.setState({
      message: e.target.value
    })
  }
  // 产出UI模板结构
  render() {
    return (
      // 2.给input框的value属性绑定 react state
      // 3.给input框绑定一个change事件 为了拿到当前输入框中的数据
      <input type="text" value={this.state.message} onChange={this.inputChange}></input>
    )
  }
}

// 根组件
function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;