import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header/Header';

import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<ProjectGallery/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
