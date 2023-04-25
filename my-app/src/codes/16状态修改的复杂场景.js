import React from "react";
class Test extends React.Component {
  state = {
    count: 0,
    list: [1,2,3],
    person: {
      name: 'czy',
      age: 24
    }
  }
  
  handler1 = ()=>{
    this.setState({
      list: [...this.state.list, 4, 5], // 数组的非直接修改式的修改
      person: { // 对象的非直接修改式的修改
        ...this.state.person, 
        name: 'lucky' // 覆盖旧值
      }
    })
  }
  handler2 = ()=>{
    this.setState({
      list: this.state.list.filter((item) => item !== 2) // 删除数组中的某元素
    })
  }
  render() {
    return (
      <>
        <ul>
          {this.state.list.map((num) => <li key={num}>{num}</li>)}
        </ul>
        <div>{this.state.person.name}</div>
        <button onClick={this.handler1}>changeState1</button>
        <button onClick={this.handler2}>changeState2</button>
      </>
    )
  }
}

// 根组件
function App() {
  return (
    <div className="App">
      <Test></Test>
    </div>
  );
}

export default App;