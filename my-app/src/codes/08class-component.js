// 类组件的创建和渲染
import React from "react";

// 创建
class HelloComponent extends React.Component{
  render() {
    return <div>this is a class component</div>
  }
}
// 渲染 2种方式：自闭合 / 成对出现

function App() {
  return (
    <div className="App">
      {/* 渲染类组件 */}
      <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
