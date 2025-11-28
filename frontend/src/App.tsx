import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('')
  const fetchResponse = async () => {
    const response = await fetch('/api/')
    if (response.ok) {
      console.log(response)
      const data = await response.text()
      data && setData(data)
    }
  }
  return (
    <div>
      This is my app : {data} <button onClick={fetchResponse}>Fetch</button>
    </div>
  )
}

export default App
