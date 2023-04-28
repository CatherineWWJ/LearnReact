import React from "react";
// 目标：B组件中的数据传递给A
// 技术方案：
// 1.先把B中的数据通过子传父 传给App
// 2.再把App接收到的B中的数据通过父传子 传给A

function SonA (props) {
  return (
    <div>this is SonA,{props.sendAMsg}</div>
  )
}

function SonB (props) {
  const bMsg = 'data from B'
  return (
    <div>
      this is SonB
      <button onClick={()=>{props.getBMsg(bMsg)}}>B传给App</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    sendAMsg: ''
  }
  // 声明一个传给B组件的方法
  getBMsg = (msg)=>{
    console.log(msg);
    this.setState({
      sendAMsg: msg
    })
  }
  render() {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg}></SonA>
        <SonB getBMsg={this.getBMsg}></SonB>
      </div>
    )
  }
}

export default App;