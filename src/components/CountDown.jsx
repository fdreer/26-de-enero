import TimeToCountDown from './TimeToCountDown';
import macaFranco from '../assets/maca-franco.jpeg';

export default function CountDown() {
  return (
    <section className="card">
      <img className="avatar" src={macaFranco} alt="Foto de Maca y Franco" />
      <h2>🤍 26 de Enero 🤍</h2>
      <TimeToCountDown />
    </section>
  );
}
