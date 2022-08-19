import React from 'react';
import './GPU.css';

const GPU:React.FC = () => (
  <div className="gpu">
    <div className="line1">GPU</div>
    <div className="line2">
      <div className="left-side">
        <p className="left-side-line1">7-core GPU </p>
        <p className="left-side-line">Plays hard. </p>
        <p className="left-side-line">Works wonders.</p>
      </div>
      <div className="right-side">
        The GPU in M1 delivers lightning‑fast integrated graphics. So
        you can create, edit, and seamlessly play back multiple streams
        of full‑quality 4K video without dropping a frame.
      </div>
    </div>
  </div>
);

export default GPU;
