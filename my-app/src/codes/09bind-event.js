import React from "react";

const handleEvent = ()=>{
  console.log('事件被触发了！');
}

class HelloComponent extends React.Component{
  // 事件回调函数（标准写法 避免this指向问题）
  // 这样写 回调函数中的this指向的是当前的组件实例对象
  clickHandler = ()=>{
    console.log('类组件中的事件被触发啦！');
  }
  render() {
    return <div onClick={this.clickHandler}>this is a class component</div>
  }
}

function App() {
  return (
    <div className="App">
      <div onClick={ handleEvent }>hello</div>
      <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
