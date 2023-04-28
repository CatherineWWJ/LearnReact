import React,{createContext} from "react";
// 前提：App -> A -> C
// 目标：App数据 -> C
/**
 * 注意事项：
 * 1.上层组件和下层组件关系是相对的，只要存在就可以使用 通常我们都会通过app作为数据提供方
 * 2.这里涉及到的语法都是固定的，有两处：提供的位置 value属性提供数据；获取的位置 {value=>使用value做什么都可以}
 */
// 1.导入createContext方法并执行，结构提供者 + 消费者
const {Provider, Consumer} = createContext()

function ComA(){
  return (
    <div>
      this is ComA
      <ComC></ComC>
    </div>
  )
}

function ComC(){
  return (
    <div>
      this is ComC
      {/* 3.通过Consumer使用数据 */}
      <Consumer>
        {/* 箭头函数的格式固定写法 */}
        {value=><span>{value}</span>}
      </Consumer>
    </div>
  )
}

class App extends React.Component {
  // 准备数据
  state = {
    msg: 'data from App'
  }
  render() {
    return (
      // 2.使用Provider包裹根组件的模板
      <Provider value={this.state.msg}>
        <div>
          <ComA></ComA>
        </div>
      </Provider>
    )
  }
}

export default App;