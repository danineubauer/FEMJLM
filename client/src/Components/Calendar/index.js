import React, { useContext } from "react";
import Arc from '../Assets/logos/Arc.png';
import JDA from '../Assets/logos/JDA.png';
import Jer from '../Assets/logos/Jer.png';
import Jeru_Ministry from '../Assets/logos/Jeru_Ministry.png';
import JNEXT from '../Assets/logos/JNEXT.png';
import Taboola from '../Assets/logos/Taboola.jpg';

import Header from "../Header";

import './style.css'

function Calendar() {

  return (
    <div>
      <Header>
        Our sponsors
      </Header>

      <div className="container container-calendar">

        <div className='row'>
          <div className='col-lg-12' display='flex'>

            <img className='logo' src={Arc} alt='logo1' width='auto' height='100px'></img>
            <img className='logo' src={JDA} alt='logo2' width='auto' height='100px'></img>
            <img className='logo' src={Taboola} alt='logo6' width='auto' height='50px'></img>
            <img className='logo' src={Jeru_Ministry} alt='logo4' width='auto' height='100px'></img>
            <img className='logo' src={Jer} alt='logo3' width='auto' height='200px'></img>
            <img className='logo' src={JNEXT} alt='logo5' width='auto' height='150px'></img>

          </div>
        </div>

      </div>
    </div>

  );
}

export default Calendar;
