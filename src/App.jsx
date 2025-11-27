import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">© {new Date().getFullYear()} TechBuild Group</footer>
      </div>
    </BrowserRouter>
  );
}
