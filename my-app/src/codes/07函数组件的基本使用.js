// 函数组件的创建和渲染
// 创建
function Hello() {
    return <div>hello</div>
  }
  
  // 渲染 2种方式：<Hello/>   <Hello></Hello>
  
  function App() {
    return (
      <div className="App">
        <Hello></Hello>
        <Hello/>
      </div>
    );
  }
  
  export default App;
  