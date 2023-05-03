// 组件实例 = 类组件
// dom对象 = 标签
import React, {useRef, useEffect} from "react"

class TestC extends React.Component {
  state = {
    age: 20
  }
  getName = () => {
    return 'wwj'
  }
  render() {
    return (
      <div>this is testC</div>
    )
  }
}
 

function App() {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    // 通过ref.current可以访问组件的各种属性（状态和方法等）
    console.log(testRef.current);
    console.log(h1Ref.current);
  }, [])
  // useEffect的回调是在dom渲染之后执行
  
  return ( 
    <div>
      <TestC ref={testRef}></TestC>
      <h1 ref={h1Ref}>this is h1 </h1>
    </div>
  )
}

export default App