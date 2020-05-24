import React, { useContext, Children } from "react";
import { Grid } from "../Grid";
import Imgone from '../Assets/Imgone.jpg';
import Imgtwo from '../Assets/Imgtwo.jpg';
import Imgthree from '../Assets/Imgthree.jpg';
import Imgfour from '../Assets/Imgfour.jpg';

import './style.css'

function Textbox(props) {

  return (

    <div className="col-lg-6 col-md-12 col-sm-12">
      <div className="jumbotron jumbotron-about">
        {props.children}
      </div>
    </div>


  );
}

export default Textbox;
