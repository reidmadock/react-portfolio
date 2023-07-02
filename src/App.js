import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
