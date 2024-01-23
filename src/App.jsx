import { useState } from 'react';
import './App.css';
import GaugeComponent from 'react-gauge-component';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GaugeComponent
        value={50}
        type="semicircle"
        labels={{
          tickLabels: {
            type: 'outer',
            ticks: [
              { value: 20 },
              {
                value: 40,
              },
              { value: 60 },
              { value: 80 },
              { value: 100 },
            ],
          },
        }}
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          colorArray: ['#5BE12C', '#EA4228', 'gold', 'tomato'],
          subArcs: [
            { limit: 10, showTick: false },
            { limit: 30, showTick: false },
            { showTick: false },
            { showTick: false },
            { showTick: false },
          ],
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
          width: 10,
          color: 'lime',
          type: 'arrow',
        }}
      />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
