import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from '@dnb/eufemia'
import Bloomberg from './components/Bloomberg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="header">
        FRYD Dashboard
      </header>
      <div className="main">
        Boxes Area
        {[1,2,3,4,5,6].map(x => {
          return <div className="box">Box {x}</div>
        })}
      
      </div>
    </div>
  )
}

export default App
