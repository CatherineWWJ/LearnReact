// 动态控制一下这个active类名  满足条件才有
import './App.css';

const activeFlag = true

function App() {
  return (
    <div className="App">
      <span className={activeFlag?'active':''}>动态控制类名</span>
      <span className={false?'active':''}>动态控制类名</span>
    </div>
  );
}

export default App;