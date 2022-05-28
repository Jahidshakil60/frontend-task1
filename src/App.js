import React from 'react'
import './app.css'
import Home from './components/Home';
import Nav from './components/Nav';
import SectionOne from './components/SectionOne';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <SectionOne />
        
    </div>
  );
}

export default App;
