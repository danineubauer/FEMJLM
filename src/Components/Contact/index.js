import React, { useContext } from "react";
import './style.css'
import Header from "../Header";

function Contact() {

  return (
    <div>
      <Header>
        <p>We want to hear from you!</p>
      </Header>
      <div className='container'>

        <form>
          <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder="First name"></input>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name"></input>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Email"></input>
            </div>
          </div>
          <br></br>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Your message here:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>


        </form>
      </div>


    </div>
  );
}

export default Contact;
