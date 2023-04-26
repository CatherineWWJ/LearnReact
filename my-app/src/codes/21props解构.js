// App 父组件  Son 子组件
import React from "react";

// 函数式的Son
// function Son(props) {
//   console.log(props); // 包括react-element元素
//   // 第一种解构赋值方式：
//   const {list, person, getMsg, child} = props
//   return (
//     <div>
//       我是函数式子组件
//       {list.map(item=><div key={item}>{item}</div>)}
//       <p>名字是：{person.name}</p>
//       <p>年龄是：{person.age}</p>
//       <button onClick={getMsg}>触发父组件传入的函数</button>
//       {child}
//     </div>
//   )
// }

// 第二种解构赋值方式：
function Son({list, person, getMsg, child}) {
  return (
    <div>
      我是函数式子组件
      {list.map(item=><div key={item}>{item}</div>)}
      <p>名字是：{person.name}</p>
      <p>年龄是：{person.age}</p>
      <button onClick={getMsg}>触发父组件传入的函数</button>
      {child}
    </div>
  )
}
// 这里写的就是原生的函数语法  props也是一个普通的js对象

// 父组件需要给子组件传递参数，只有类组件才有状态！
class App extends React.Component {
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