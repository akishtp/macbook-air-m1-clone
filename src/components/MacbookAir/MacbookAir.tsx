import React from 'react';
import './MacbookAir.css';

const MacbookAir:React.FC = () => (
  <div className="macbook-air">
    <div className="line1">MacBook Air</div>
    <div className="line2">Power. It’s in the Air.</div>
    <div className="line3">
      Macbook Air with M1 is an incredibly portable laptop — it’s nimble
      and quick, with a silent, fanless design and a beautiful
      Retina display. Thanks to its slim profile and all‑day battery life,
      this Air moves at the speed of lightness.
    </div>
    <div className="line4">
      <img src="/Images/m1-chip.jpeg" alt="M1 chip" />
      Supercharged by the Apple M1 chip
    </div>
    <div className="line5">
      <div className="item 1">From $999</div>
      <div className="item 2">|</div>
      <div className="item 3">Watch the event &#62;</div>
    </div>
  </div>
);

export default MacbookAir;
