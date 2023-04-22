function Hello() {
  const clickHandler = (e)=>{
    // 阻止默认行为
    e.preventDefault();
    console.log('函数组件中的事件被触发了！', e);
  }
  return <div><a onClick={clickHandler} href="http://baidu.com">点击跳转百度</a></div>
}

function App() {
  return (
    <div className="App">
      <Hello></Hello>
    </div>
  );
}

export default App;
// 22