import {useState, useEffect} from 'react';
import fireworks from '../logic/fireworks';
import {obtenerAniversario} from '../logic/obtenerAniversario';
import tiempoDeDiferencia from '../logic/tiempoDeDiferencia';

export default function useCountDown() {
  const [countDown, setCountDown] = useState(null);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    if (!isFinish) {
      setTimeout(() => {
        const aniversario = obtenerAniversario('Jan 26');

        // Time --> Diferencia de tiempo entre limitDate y now
        const time = tiempoDeDiferencia(aniversario);

        if (!time) {
          setCountDown({days: '0', hours: '00', minutes: '00', seconds: '00'});
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
