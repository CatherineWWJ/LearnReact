// 通过类组件修改状态的方式 counter
import React from "react";
class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0
  }
  changeCount = () => {
    // 修改state
    this.setState({
      count : this.state.count + 1
    })
  }
  render () {
    return (
      <button onClick={this.changeCount}>{this.state.count}click</button>
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