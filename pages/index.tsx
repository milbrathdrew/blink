import { useEffect, useState } from 'react'

export default function Home() {
  const [estimatedBlinks, setEstimatedBlinks] = useState<number>(0)
  const BLINKS_PER_MINUTE = 17 // Average human blink rate

  useEffect(() => {
    const calculateBlinks = () => {
      const lastVisit = localStorage.getItem('lastVisit')
      const now = new Date().getTime()
      
      if (lastVisit) {
        const timeDiff = now - parseInt(lastVisit)
        const minutesPassed = timeDiff / (1000 * 60)
        setEstimatedBlinks(Math.round(minutesPassed * BLINKS_PER_MINUTE))
      }
      
      localStorage.setItem('lastVisit', now.toString())
    }

    calculateBlinks()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blink Estimator</h1>
        <p className="text-xl">
          Since your last visit, you've probably blinked about:
        </p>
        <p className="text-6xl font-bold my-4">{estimatedBlinks}</p>
        <p className="text-lg">times!</p>
      </div>
    </div>
  )
}
