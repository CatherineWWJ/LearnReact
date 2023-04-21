// 条件渲染
// 技术方案：三元运算符（常用）  逻辑&&运算符

// 1.三元表达式 - 满足条件才渲染一个span标签
const flag = true
// 2.&&

function App() {
  return (
    <div className="App">
      { flag ? (
        <div>
          <span>this is a span</span>
        </div>):null }
      { true && <span>this is a new span</span> }
    </div>
  );
}

export default App;