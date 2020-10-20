import React from "react";
import Nav from "./Components/Nav";
import Jumbotron from "./Components/Jumbotron";
import About from "./Components/About";
import Weekly from "./Components/Weekly";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Calendar from "./Components/Calendar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <About />
      <Weekly />
      <Calendar />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
