import React from 'react';
import { ImAppleinc } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';

const TopNav:React.FC = () => (
  <div className="top-nav">
    <ul className="top-nav-wrapper">
      <li className="top-nav-item"><ImAppleinc size={16} /></li>
      <li className="top-nav-item">Store</li>
      <li className="top-nav-item">Mac</li>
      <li className="top-nav-item">iPad</li>
      <li className="top-nav-item">iPhone</li>
      <li className="top-nav-item">Watch</li>
      <li className="top-nav-item">AirPods</li>
      <li className="top-nav-item">TV & Home</li>
      <li className="top-nav-item">Only on Apple</li>
      <li className="top-nav-item">Accessories</li>
      <li className="top-nav-item">Support</li>
      <li className="top-nav-item"><BiSearch size={16} /></li>
      <li className="top-nav-item"><BsBag size={16} /></li>
    </ul>
  </div>
);

export default TopNav;
