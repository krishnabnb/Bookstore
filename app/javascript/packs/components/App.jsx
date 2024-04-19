import React from 'react';
import Header from './Header';
import Bio from './Bio';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
