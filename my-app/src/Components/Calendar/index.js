import React, { useContext } from "react";
import Header from "../Header";

import './style.css'

function Calendar() {

  return (
    <div>
      <Header>
        Our Upcoming Events
      </Header>

      <div className="container container-calendar">

        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles" width="800" height="600" frameborder="0" scrolling="no"></iframe>

      </div>
    </div>

  );
}

export default Calendar;
