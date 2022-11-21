import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewRequest from './NewRequest';
import RequestPage from './RequestPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';




function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/request">
          <NewRequest />
        </Route>
        <Route path="/request/:id">
          <RequestPage />
        </Route>
        <Route path="about" element={<About />} />
        {/* *catch all if non of component is missing */}
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
