import React from 'react';
import './CPU.css';

const CPU:React.FC = () => (
  <div className="cpu">
    <div className="line1">CPU</div>
    <div className="line2">8-core CPU</div>
    <div className="line3">
      <p>Devours tasks.</p>
      <p>Sips battery.</p>
    </div>
    <div className="line4">
      The CPU on M1 isn’t just astonishingly fast — it
      balances high-performance cores with efficiency
      cores that crush everyday jobs while using far
      less energy. With that kind of processing power,
      MacBook Air can take on intensive tasks like
      professional-level video editing and action-
      packed gaming.
    </div>
    <img src="/Images/cpu-imov.png" alt="imovie" className="cpu-img" />
  </div>
);

export default CPU;
