import React, { useContext } from "react";
import emailjs from 'emailjs-com'; 
import Header from "../Header";

var template_params = {
  "reply_to": "reply_to_value",
  "from_name": "from_name_value",
  "to_name": "to_name_value",
  "message_html": "message_html_value"
}

var service_id = "default_service";
var template_id = "template_pTMcfzMR";
emailjs.send(service_id, template_id, template_params);


function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  } 

  return (
    <div>


    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      {/* <button type="submit" className="btn btn-link linkBtn" value='Send'></button> */}
      {/* <input type="submit" value="Send" /> */}
    </form>
    </div>
  );
}
  

export default ContactUs;
