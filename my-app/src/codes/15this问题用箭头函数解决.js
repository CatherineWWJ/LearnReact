// 了解即可，实际工作中最好不要这样写！！！
import React from "react";
// this有问题的写法举例
class Test extends React.Component {
  
  handler() {
    console.log(this); // undefined
    // this.setState去修改数据还可以吗？ 就会报错了
  }
  render() {
    // render函数中的this已经被react内部做了修正
    // 这里的this就是指向当前的组件实例对象
    // 那我们箭头函数中的this直接沿用 所以也是指向组件的实例对象
    console.log('父函数中的this指向为：', this);
    return (
      // 修正this指向方法：使用箭头函数调用的方式   直接沿用父函数(render)中的this指向也是ok的
      <button onClick={() => this.handler()}>click</button>
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