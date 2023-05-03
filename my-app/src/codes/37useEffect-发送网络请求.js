// 类组件 如何发送网络请求？
// 生命周期钩子函数 componentDidMount
// 执行时机？ 
// 在初始化的时候dom渲染完毕时只执行一次

import { useEffect } from "react"

function App() {
  useEffect(() => {
    // 在此处发送网络请求即可
    function loadData() {
      // fetch是浏览器默认的发送请求的方式，可搜索fetch mdn
      // axios相对比较成熟，且可以封装拦截器等
      fetch('http://geek.itheima.net/v1_0/channels').then(
        response => response.json()
      ).then(
        data => console.log(data)
      )
    }
    loadData()
  }, [])
  return ( 
    <div>
      
    </div>
  )
}

export default App