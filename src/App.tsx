import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import MacbookAir from './components/MacbookAir/MacbookAir';
import Navbar from './components/Navbar/Navbar';

const App:React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <div className="App">
      <Banner />
      <MacbookAir />
    </div>
  </BrowserRouter>
);

export default App;
