// userState
// 1.导入useState函数 react
// 2.执行这个函数并且传入初始值 必须在函数组件中
// 3.解构赋值[数据， 修改数据的方法]
// 4.使用数据 修改数据

// 注意：解构赋值的名字(count...)可以自定义，只需要保持语义化;顺序不可以换！
// setCount函数：作用即修改count 依旧保持不能直接修改原值 还是生成一个新值替换原值
// setCount(基于原值计算得到的新值)
// count和setCount是一对

/**
 * 调用setCount的时候 更新过程：
 * 首次渲染
 * 首次被渲染的时候 组件内部的代码会被执行一次
 * 其中useState也会跟着执行一次 这里重点注意 初始值0只在首次渲染时生效
 * 
 * 更新渲染 setCount都会更新
 * 1.app组件会再次渲染 这个函数会再次执行
 * 2.useState再次执行 得到的新的count的值不是初始值0 而是修改后的1 模板会用新值渲染
 * 
 * 重点一句话：useState初始值只在首次渲染生效 后续只要调用setCount整个app中的代码都会执行
 * 此时的count每次拿到的都是最新值
 */

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>{count}</button>
    </div>
  )
}

export default App