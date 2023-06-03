import useCountDown from '../hooks/useCountDown'

export default function TimeToCountDown() {
  const {countDown, isFinish} = useCountDown()

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value
  }

  return (
    <>
      <article className="count-down">
        <h2>
          {countDown === null
            ? 'Calculando...'
            : `${countDown.days}:${addLeadingZero(
                countDown.hours
              )}:${addLeadingZero(countDown.minutes)}:${addLeadingZero(
                countDown.seconds
              )}`}
        </h2>
      </article>
      {isFinish && (
        <article>
          <h2>¡FELICIDADES!</h2>
        </article>
      )}
    </>
  )
}
