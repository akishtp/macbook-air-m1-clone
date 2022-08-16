import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App:React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <div className="App">
      Hello World
    </div>
  </BrowserRouter>
);

export default App;
