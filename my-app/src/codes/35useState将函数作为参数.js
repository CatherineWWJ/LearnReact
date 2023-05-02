import { useState } from "react"

function Counter(props) {
  const [count, setCount] = useState(() => {
    /**
     * useState可以将函数作为参数
     * 目的：为了体现初始值经过一定的计算（这里的计算是广义的概念）
     * 只要无法确定  需要通过一定的操作才能获取  就可以理解为计算
     * 例如：循环遍历一万条数据才能确定这里的初始值是什么
     */
    return props.count
  })
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>{count}</button>
    </div>
  )
}

function App() {
  return ( 
    <div>
      <Counter count={10}></Counter>
      <Counter count={20}></Counter>
    </div>
  )
}

export default App