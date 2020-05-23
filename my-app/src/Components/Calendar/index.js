import React, { useContext } from "react";
import './style.css'

function Calendar() {

  return (
    <div>
      <br></br><hr></hr>

      <div className="container">
        
        <div className="row">
          <div className ="col-lg-12 col-md-12 col-sm-12">
      
            <div className="jumbotron  ">
                <h2 className=" header display-4  "> Calendar</h2>
            </div>
          </div>
        </div>

      <div className="row">
        
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="jumbotron jumbotron-femstar">
          <h5>Calendar</h5><br></br>
              <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles" width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>

        
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="jumbotron ">
          <h5>Calendar</h5><br></br>           
          </div>
        </div>

            </div>
      </div>
      </div>
  
      );
      }

      export default Calendar;
