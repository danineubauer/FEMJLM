import React, { useContext, Children } from "react";


import './style.css'

function Header(props) {

  return (
    <div>
            <br></br><hr></hr><br></br>


      <div className="container">
    
        <div className="row">
          <div className ="col-lg-12 col-md-12 col-sm-12">
    
            <div className="jumbotron jumbotron-header ">
                <h2 className=" header display-4  ">{props.children}</h2>
            </div>
          </div>
        </div>
</div>
</div>
      );
      }

      export default Header;
