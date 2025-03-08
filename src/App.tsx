import reactLogo from './assets/react.svg'
import './App.css'
import { Weather } from './components/Weather'
import { Wisdom } from './components/Wisdom'

export const App = () => {

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>AI assisted coding</h1>
      <div className="card">
        <Weather />
      </div>
      <div className="card">
        <Wisdom />
      </div>
    </>
  )
}
