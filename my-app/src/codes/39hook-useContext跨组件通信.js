import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"
const Context = createContext()
function ComA() {
  const count = useContext(Context)
  return (
    <div>
      this is comA<br></br>
      app传过来的数据为：{count}
      <ComC></ComC>
    </div>
  )
}

function ComC() {
  const count = useContext(Context)
  return (
    <div>
      this is comC<br></br>
      app传过来的数据为：{count}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(10)
  return ( 
    <Context.Provider value={count}>
      <div>
        <ComA></ComA>
        <button onClick={() => {setCount(count + 1)}}>count++</button>
      </div>
    </Context.Provider>
  )
}

export default App