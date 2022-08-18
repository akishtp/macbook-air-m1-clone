import React from 'react';
import { ImAppleinc } from 'react-icons/im';
import './M1Chip.css';

const M1Chip:React.FC = () => (
  <div className="m1-chip">
    <div className="line1">
      <ImAppleinc />
      M1
    </div>
    <div className="line2">Small chip. Giant leap.</div>
    <div className="line3">
      M1 is our first chip designed specifically for Mac.
      Apple silicon integrates the CPU, GPU, Neural Engine, I/O,
      and so much more onto a single tiny chip. Packed with an
      astonishing 16 billion transistors, M1 delivers exceptional
      performance, custom technologies, and unbelievable power
      efficiency — a major breakthrough for Mac.
    </div>
    <img src="/Images/m1-chip-big.jpg" alt="m1 chip" className="m1-chip-img" />
  </div>
);

export default M1Chip;
