import React from 'react';
import Nav from './Components/Nav'
import Jumbotron from './Components/Jumbotron'
import About from './Components/About'
import Weekly from './Components/Weekly'
import Textbox from './Components/Textbox'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Calendar from './Components/Calendar'
import Photobanner from './Components/Photobanner'
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav></Nav>
        <Jumbotron></Jumbotron>
        <About></About>
        <Weekly></Weekly>
        <Calendar></Calendar>
        <Contact></Contact>
        <Photobanner></Photobanner>
        <Footer></Footer>
    </div>
  );
}

export default App;
