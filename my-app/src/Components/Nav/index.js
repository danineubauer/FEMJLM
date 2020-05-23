import React, { useContext } from "react";
import Logo from '../Assets/Logo.png'
import './style.css'

function Nav() {

  return (
    <ul className="nav d-flex">
        <li className=" mr-auto p-2 nav-item">
        <a className='nav-logo'>
          <img  src={Logo} alt='logo' width="70" height="75" 
          className="shadow  rounded-inline-block align-top " ></img>
        </a>
        </li>

      <li className="nav-item my-auto p-2">
        <a className="nav-link active" href="#">Link</a>
      </li>
      <li className="nav-item my-auto p-2">
        <a className="nav-link" href="#">English</a>
      </li>
      <li className="nav-item my-auto p-2">
        <a className="nav-link" href="#">اللغات</a>
      </li>
      <li className="nav-item my-auto">
        <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">עברית</a>
      </li>

    </ul>

  );
}

export default Nav;
