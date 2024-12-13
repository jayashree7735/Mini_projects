import { useState } from 'react'

import "./App.css";

import TodoApp from './Components/Todo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
        <TodoApp/>
       </div>
    </>
  )
}

export default App
