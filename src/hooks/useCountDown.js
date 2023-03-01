import {useState, useEffect} from 'react';
import fireworks from '../logic/fireworks';
import {obtenerAniversario} from '../logic/obtenerAniversario';
import tiempoDeDiferencia from '../logic/tiempoDeDiferencia';
import {DATE, TIME_ZERO} from '../constants';

export default function useCountDown() {
  const [countDown, setCountDown] = useState(null);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    if (!isFinish) {
      setTimeout(() => {
        const aniversario = obtenerAniversario({date: DATE});
        const time = tiempoDeDiferencia(aniversario);

        if (!time) {
          setCountDown({
            days: TIME_ZERO.days,
            hours: TIME_ZERO.hours,
            minutes: TIME_ZERO.minutes,
            seconds: TIME_ZERO.seconds,
          });
          setIsFinish(true);
        } else {
          setCountDown(time);
        }
      }, 1000);
    } else {
      fireworks();
    }
  }, [countDown]);

  return {countDown, isFinish};
}
