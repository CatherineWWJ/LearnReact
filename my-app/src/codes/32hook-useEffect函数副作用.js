import { useState,useEffect } from "react"
// 在修改数据之后 把count值放在页面标题中  需要操作dom节点
// 1.导入useEffect函数
// 2.在函数组件中执行 传入回调 并且定义副作用
// 3.当我们通过修改状态更新组件时，副作用也会不断执行

/**
 * 依赖项控制副作用的执行时机
 * 1.默认状态（无依赖项）
 * 组件初始化的时候先执行一次  等到每次数据修改组件更新再次执行
 * 2.添加一个空数组依赖项
 * 只在组件初始化的时候执行一次
 * useEffect(() => {
    document.title = 1
  }, []) 
   3.依赖项特定
   组件初始化的时候执行一次  依赖的特定项发生变化会再次执行
 */

// 某种意义上  hook的出现  就是想不用生命周期概念也可以写业务代码

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    // 定义副作用
    console.log('副作用又执行了！');
    document.title = count
  }, [count]) // 只有一个依赖项count
  // 注意事项：用到的依赖项最好都包含到数组中，否则容易出bug
  return ( 
    <div>
      <button onClick={() => {setCount(count+1)}}>{count}</button>
      <button onClick={() => {setName('wwj')}}>按钮{name}</button>
    </div>
  )
}

export default App