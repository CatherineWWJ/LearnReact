// App 父组件  Son 子组件
import React from "react";

// 函数式的Son
function Son(props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  console.log(props); // 包括react-element元素
  return (
    <div>
      我是函数式子组件
      {props.list.map(item=><div key={item}>{item}</div>)}
      <p>名字是：{props.person.name}</p>
      <p>年龄是：{props.person.age}</p>
      <button onClick={props.getMsg}>触发父组件传入的函数</button>
      {props.child}
    </div>
  )
}

// 父组件需要给子组件传递参数，只有类组件才有状态！
class App extends React.Component {
  // 1.准备数据
  state = {
    list: [1,2,3],
    person: {
      name:'czy',
      age:18
    }
  }
  getMsg = ()=>{
    console.log('这是父组件中的函数');
  }
  render() {
    return (
      <div>
        {/* 2.子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <Son
          list={this.state.list}
          person={this.state.person}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
        ></Son>
      </div>
    )
  }
}

export default App;