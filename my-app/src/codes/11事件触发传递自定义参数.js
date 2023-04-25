// 如何传递自定义参数
// 1.只需要一个额外参数   {clickHandler} -> {() => clickHandler('自定义的参数')}
// 2.既需要e也需要额外的参数    {clickHandler} -> {(e) => clickHandler(e, '自定义的参数')}
function Hello() {
  const clickHandler = (e, msg)=>{
    console.log('函数组件中的事件被触发了！', e, msg);
  }
  // 改造成箭头函数的调用执行方式即可
  return <div onClick={(e) => clickHandler(e, 'this is a msg')}>点击触发事件</div>
}

function App() {
  return (
    <div className="App">
      <Hello></Hello>
    </div>
  );
}

export default App;