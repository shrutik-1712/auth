import { useState } from 'react'
import LoginFom from './components/LoginFom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginFom/>
    </>
  )
}

export default App
