import React,{ createRef } from "react";

class Input extends React.Component {
  // 这个实例属性是可以自定义的 语义化即可
  msgRef = createRef()
  // 回调函数
  getInputValue = () => {
    // 通过msgRef获取input value值
    console.log(this.msgRef.current.value);
  }
  // 产出UI模板结构
  render() {
    return (
      <>
        <input type="text" ref={this.msgRef}></input>
        <button onClick={this.getInputValue}>点击获取输入框的值</button>
      </>
    )
  }
}

// 根组件
function App() {
  return (
    <div className="App">
      <Input></Input>
    </div>
  );
}

export default App;