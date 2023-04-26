// App 父组件  Son 子组件
import React from "react";
// 父传子：props
// 子传父：子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可
function Son(props) {
  const {getSonMsg} = props
  function clickHandler() {
    const sonMsg = 'czy'
    getSonMsg(sonMsg)
  }
  return (
    <div>
      我是函数式子组件
      <button onClick={()=>getSonMsg('wwj')}>click1</button>
      <button onClick={clickHandler}>click2</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    list: [1,2,3]
  }
  // 1.准备一个函数  传给子组件
  getSonMsg = (sonMsg)=>{
    console.log(sonMsg);
  }
  render() {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg}></Son>
      </div>
    )
  }
}

export default App;