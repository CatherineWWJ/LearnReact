import React from "react";

class Test extends React.Component{
  // 如果数据是组件的状态需要去影响视图 定义到state中
  // 而如果我们需要的数据状态 不和视图绑定 定义成一个普通的实例属性就可以啦
  // state中尽量保持精简
  timer = null
  componentDidMount() {
    this.timer = setInterval(()=>{
      console.log('定时器开始');
    }, 1000)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>test</div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  state = {
    name: 'wwj',
    flag: true
  }
  changeValue = ()=>{
    this.setState({
      name: 'czy',
      flag: !this.state.flag
    })
  }
  render() {
    console.log('render');
    return (
      <div>
        this is a test
        <div>{this.state.name}</div>
        <button onClick={this.changeValue}>change</button>
        {this.state.flag ? <Test></Test>:null}
      </div>
    )
  }
}

export default App;