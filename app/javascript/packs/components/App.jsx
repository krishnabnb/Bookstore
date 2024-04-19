import React from 'react';
import Header from './Header';
import Bio from './Bio';
import Footer from './Footer'; // Make sure to provide the correct path to your Footer component
import { Home } from './Home';
import { Contect } from './Contect';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/bio" element={<Bio />} />
          <Route path="/" element={<Home />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
