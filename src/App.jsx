import {useState} from 'react';
import './App.css';
import CountDown from './components/CountDown';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  return (
    <main className="App">
      <CountDown />
    </main>
  );
}

export default App;
