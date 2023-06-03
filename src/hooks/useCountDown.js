import {useState, useEffect} from 'react'
import {ANNIVERSARY} from '../constants'
import fireworks from '../logic/fireworks'
import calculateTimeLeft from '../logic/calculateTimeLeft'
import getNextAnniversary from '../logic/getNextAnniversary'

export default function useCountDown() {
  const [countDown, setCountDown] = useState(null)
  const [isFinish, setIsFinish] = useState(false)

  useEffect(() => {
    let timer

    const handleFinish = () => {
      setIsFinish(true)
      clearInterval(timer)
      fireworks()
    }

    if (!isFinish) {
      timer = setInterval(() => {
        const nextAnniversary = getNextAnniversary(ANNIVERSARY)
        const newTimeLeft = calculateTimeLeft(nextAnniversary)
        setCountDown(newTimeLeft)

        if (
          newTimeLeft.days === 0 &&
          newTimeLeft.hours === 0 &&
          newTimeLeft.minutes === 0 &&
          newTimeLeft.seconds === 0
        ) {
          handleFinish()
        }
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [])

  return {countDown, isFinish}
}
