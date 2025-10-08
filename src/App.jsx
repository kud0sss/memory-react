import { useState } from 'react'
import img1 from "/img/React.jpg"
import './App.css'
import Grid from "./grid/Grid.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Grid/>
    </>
  )
}

export default App
