import './App.scss';
import React from 'react';
import TopBar from './components/topBar/TopBar';
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Menu from './components/menu/Menu'
import Contact from './components/contact/Contact'
import { useState } from 'react';
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
      <div className="app">
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Works/>
          <Testimonials/>
          <Contact/>
        </div>

      </div>
  );
}

export default App;