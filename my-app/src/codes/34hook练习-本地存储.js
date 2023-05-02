import { useLocalStorage } from "./hooks/useLocalStorage"

function App() {
  const [message, setMessage] = useLocalStorage('hook-key', 'wwj')
  return ( 
    <div>
      <p>{message}</p>
      <button onClick={()=>{setMessage('czy')}}>click to change</button>
    </div>
  )
}

export default App