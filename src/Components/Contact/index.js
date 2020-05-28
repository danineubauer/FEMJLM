import React, { useContext } from "react";
import './style.css'
import Header from "../Header";

class Contact extends React.Component {

  constructor(props) { 
    super(props); 
    this.state = { 
      name: '', 
      lastname: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(event) { 
    event.preventDefault(); 
    console.log('form submited, ', this.state)
    this.setState = {
      name: '',
    }
  }

  onNameChange(event) { 
    this.setState({name: event.target.value})
  }

  onLastnameChange(event) {
    this.setState({lastname: event.target.value})
  }

  onEmailChange(event) { 
    this.setState({email: event.target.value})
  }

  onMessageChange(event) { 
    this.setState({message: event.target.value})
  }

  render() { 

    return (
      <div className="Contact">
        <Header>
          <p>We want to hear from you!</p>
        </Header>
        <div className='container'>
  
          <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST' >
            <div className="form-row form-group">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" value={this.state.lastname} onChange={this.onLastnameChange.bind(this)}/>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
              </div>
            </div>
            <br></br>
  
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Your message here:</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
  
  
          </form>
        </div>
  
  
      </div>
    )
  };
}

export default Contact;
