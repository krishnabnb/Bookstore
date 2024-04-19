import React from 'react';
import Footer from './Footer'; // Make sure to provide the correct path to your Footer component
import { Home } from './Home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Contect } from './Contect';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
