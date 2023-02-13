import useCountDown from '../hooks/useCountDown';

export default function TimeToCountDown() {
  const {countDown, isFinish} = useCountDown();

  return (
    <>
      <article className="count-down">
        <h2>
          {countDown === null
            ? 'Calculando...'
            : `${countDown.days}:${countDown.hours}:${countDown.minutes}:${countDown.seconds}`}
        </h2>
      </article>
      {isFinish && (
        <article>
          <h2>¡FELICIDADES!</h2>
        </article>
      )}
    </>
  );
}
