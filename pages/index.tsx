// pages/index.tsx
import { useEffect, useState } from 'react'
import BlinkingEye from '../components/BlinkingEye'

export default function Home() {
  const [estimatedBlinks, setEstimatedBlinks] = useState<number>(0)

  useEffect(() => {
    // Get the last visit time from localStorage
    const lastVisit = localStorage.getItem('lastVisit')
    const currentTime = new Date().getTime()

    if (lastVisit) {
      const timeDifference = currentTime - parseInt(lastVisit)
      const minutesPassed = timeDifference / (1000 * 60)
      // Average person blinks 15-20 times per minute
      const estimatedBlinks = Math.round(minutesPassed * 17)
      setEstimatedBlinks(estimatedBlinks)
    }

    // Update the last visit time
    localStorage.setItem('lastVisit', currentTime.toString())
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blink Estimator</h1>
        <div className="w-24 h-24 mx-auto">
          <BlinkingEye />
        </div>
        <p className="text-xl mt-4">
          Since your last visit, you&apos;ve probably blinked about:
        </p>
        <p className="text-6xl font-bold my-4">{estimatedBlinks}</p>
        <p className="text-lg">times!</p>
      </div>
    </div>
  )
}
