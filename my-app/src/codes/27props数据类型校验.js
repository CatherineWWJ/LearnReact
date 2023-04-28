import React from "react";
// 里面有各种各样的内置的校验规则
import PropTypes from 'prop-types'

function Test({list}) {
  return (
    <div>
      test
      {list.map(item=><p key={item}>{item}</p>)}
    </div>
  )
}


Test.propTypes = {
  // 定义各种规则
  list: PropTypes.array.isRequired // 限定这里的list参数的类型必须是数组类型
}

class App extends React.Component {
  state = {
    list: ['wwj','czy','xwj']
  }
  render() {
    return (
      <div>
        <Test list={this.state.list}></Test>
      </div>
    )
  }
}

export default App;