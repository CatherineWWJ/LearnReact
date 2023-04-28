import React from "react";
// 里面有各种各样的内置的校验规则
import PropTypes from 'prop-types'

/**
 * 
 * 函数组件默认值：
 * 1.使用defaultProps
 * 2.函数参数默认值（更推荐）
 * 区别：1在用的时候组件内部已经有了age这个prop     2只有传递的时候组件内部才有这个prop
 */

function Test(props) {
  const {list, age} = props
  return (
    <div>
      test
      {list.map(item=><p key={item}>{item}</p>)}
      <p>{age}</p>
    </div>
  )
}

// 2.函数组件props设置默认值方式二：函数参数默认值
function Demo({age = 13}) {
  return (
    <div>
      <p>{age}</p>
    </div>
  )
}


Test.propTypes = {
  // 定义各种规则
  list: PropTypes.array.isRequired // 限定这里的list参数的类型必须是数组类型
}
// 1.函数组件props设置默认值方式一：
Test.defaultProps = {
  age: 18 // props设置默认值
}

class App extends React.Component {
  state = {
    list: ['wwj','czy','xwj']
  }
  render() {
    return (
      <div>
        <Test list={this.state.list} age={20}></Test>
        <Demo age={23}></Demo>
      </div>
    )
  }
}

export default App;