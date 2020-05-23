import React from 'react';
import Nav from './Components/Nav'
import Jumbotron from './Components/Jumbotron'
// import About from './Components/About'
// import Weekly from './Components/Weekly'
// import Contact from './Components/Contact'
// import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav></Nav>
        <Jumbotron></Jumbotron>
        {/* <About></About>
        <Weekly></Weekly>
        <Contact></Contact>
        <Footer></Footer> */}
    </div>
  );
}

export default App;
