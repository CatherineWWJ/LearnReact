// jsx 样式控制
import './App.css';
// 1.行内样式 - 在元素身上绑定一个style属性即可
const mine = {
  color:'pink',
  fontSize:'18px'
}
// 2.类名样式 - 在元素身上绑定一个className属性即可

function App() {
  return (
    <div className="App">
      {/* 外层的大括号：让里面的大括号识别为一个对象 */}
      {/* 里面的大括号：用来写成对的属性 + 属性值 */}
      {/* 属性要写成驼峰 */}
      <span style={{ color:'red',fontSize:'30px' }}>this is a span</span>
      <span style={ mine }>this is a span</span>
      <span className='active'>测试类名样式</span>
    </div>
  );
}

export default App;