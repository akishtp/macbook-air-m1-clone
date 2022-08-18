import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Banner from './components/Banner/Banner';
import CPU from './components/CPU/CPU';
import M1Chip from './components/M1Chip/M1Chip';
import MacbookAir from './components/MacbookAir/MacbookAir';
import Navbar from './components/Navbar/Navbar';

import './App.css';

const App:React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <div className="App">
      <Banner />
      <MacbookAir />
      <M1Chip />
      <CPU />
    </div>
  </BrowserRouter>
);

export default App;
