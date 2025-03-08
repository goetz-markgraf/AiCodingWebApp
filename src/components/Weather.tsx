import { useState } from 'react'

export const Weather = () => {
  const [location, setLocation] = useState('')

  return (
      <>
        <p>How is the weather today in …</p>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </>
  )
}

