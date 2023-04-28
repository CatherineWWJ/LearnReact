import React from "react";
/**
 * 
 * 类组件默认值：
 * 1.使用defaultProps
 * 2.static类静态属性定义（更推荐）
 */

class Test extends React.Component{
  // 方式二：更推荐
  static defaultProps = {
    age: 10
  }
  render() {
    return (
      <div>{this.props.age}</div>
    )
  }
}

// 方式一：
// Test.defaultProps = {
//   age: 10
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Test age={18}></Test>
      </div>
    )
  }
}

export default App;