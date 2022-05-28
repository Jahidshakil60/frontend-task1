import React from 'react'
import './app.css'
import AddFormateFour from './components/AddFormateFour';
import AddFormatesOne from './components/AddFormatesOne';
import AddFormatsThree from './components/AddFormatsThree';
import AddFormatsTwo from './components/AddFormatsTwo';
import Home from './components/Home';
import Nav from './components/Nav';
import SectionOne from './components/SectionOne';
import Title from './components/Title';
import TitleOne from './components/TitleOne';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <SectionOne />
      <AddFormatesOne />
      <AddFormatsTwo />
      <AddFormatsThree />
      <AddFormateFour />
      <TitleOne />
      <Title />
        
    </div>
  );
}

export default App;
