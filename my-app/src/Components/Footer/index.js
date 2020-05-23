import React, { useContext } from "react";
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Logo from '../Assets/Logo.png'
import './style.css'

function Footer() {

  return (
    <div>

      <a className="  page-footer font-small blue pt-4">
        <a className="container-fluid text-center text-md-left">
          <a className="row">
            <a className="col-lg-6 col-md-6 mt-md-0 mt-3">
              <h5 className=" text-uppercase text-left">FEM JLM</h5>
              <p className='text-left'>Add Text</p>
            </a>
            <a className="col-lg-6 col-md-6 mt-md-0 mt-3">
              <p >More text</p>
            </a>
          </a>
          <ul className="nav d-flex justify-content-center">
            <li className=" sm d-flex nav-item p-2">
              <a className="nav-link active" href="#" class="fa fa-facebook"></a>
            </li>
            <li className="sm d-flex nav-item p-2">
              <a className="nav-link active" href="#" class="fa fa-instagram"></a>
            </li>
            <li className="sm d-flex nav-item p-2">
              <a className="nav-link active" href="#" class="fa fa-linkedin"></a>
            </li>
            <li className="sm d-flex nav-item p-2">
              <a className="nav-link active" href="#" class="fa fa-google"></a>
            </li>
            <li className="sm d-flex  nav-item p-2">
              <a className="nav-link active" href="#" class="fa fa-twitter"></a>
            </li>
          </ul>
          <hr></hr>


          <a className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#">Danielle Neubauer</a>
          </a></a></a>
    </div>
  );
}

export default Footer;
