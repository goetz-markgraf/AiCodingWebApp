import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react'

function App() {

  const [location, setLocation] = useState('')
  const [question, setQuestion] = useState('')

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>AI assisted coding</h1>
      <div className="card">
        <p>How is the weather today in …</p>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className="card">
        <p>I want to ask somthing:</p>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
    </>
  )
}

export default App
