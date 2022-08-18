import React, { useEffect, useState } from 'react';
import TopNav from './TopNav';

import './Navbar.css';
import AnotherBar from './AnotherBar';

const Navbar:React.FC = () => {
  const [stickyClass, setStickyClass] = useState('');

  const stickNavbar:()=>void = () => (
    window.scrollY > 48
      ? (setStickyClass('sticky')) : (setStickyClass(''))
  );

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  return (
    <>
      <TopNav />
      <div className={`navbar ${stickyClass}`}>
        <div className="top-side-navbar">M1 chip model</div>
        <div className="bottom-side-navbar">
          <div className="bottom-side-navbar-left">MacBook Air</div>
          <ul className="bottom-side-navbar-right">
            <li className="bottom-side-navbar-right-item">Overview</li>
            <li className="bottom-side-navbar-right-item">Why Mac</li>
            <li className="bottom-side-navbar-right-item">Compare</li>
            <li className="bottom-side-navbar-right-item">Tech Specs</li>
            <li className="bottom-side-navbar-right-item">
              <button className="buy-button" type="button">Buy</button>
            </li>
          </ul>
        </div>
      </div>
      <AnotherBar />
    </>
  );
};

export default Navbar;
