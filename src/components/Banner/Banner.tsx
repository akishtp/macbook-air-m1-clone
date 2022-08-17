import React, { useRef, useEffect } from 'react';
import './Banner.css';

const Banner:React.FC = () => {
  const videoRef = useRef<any>(null);
  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="banner">
      <video className="bg-vid" autoPlay poster="/Images/mac-before.jpeg" ref={videoRef}>
        <source src="/Videos/mac-open.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Banner;
