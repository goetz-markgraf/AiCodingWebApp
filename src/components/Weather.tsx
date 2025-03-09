import { useState } from 'react'
import useLocation from '../hooks/useLocation'

export const Weather = () => {
  const [location, setLocation] = useState('')
  const [query, setQuery] = useState('')
  const weather = useLocation(query)

  const handleSearch = () => {
    setQuery(location)
  }

  return (
      <>
        <p>How is the weather today in …</p>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        <button onClick={handleSearch}>Get Weather</button>
        {weather ? (
          <div>
            <p>Temperature: {weather.temperature.toFixed(1)}°C</p>
            <p>Condition: {weather.description}</p>
          </div>
        ) : (
          <p>Please enter a location to get the weather information.</p>
        )}
      </>
  )
}

