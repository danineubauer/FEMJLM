import React, { useContext } from "react";
import axios from 'axios';
import './style.css'



class Newsletter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('newsletter submition', this.state.email)

    if(this.state.email === "") { 
      alert('please submit an email address')
    } else { 
      axios({
        method: "POST",
        url: 'api/form',
        data: this.state
      }).then((response) => {
        if (response.data.status === 'success') {
          alert("Message Sent.");
          this.resetForm()
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
      alert ('Thank you! Welcome to the fam!')
    }
  }

render(){

  return(
<form id = 'subscription-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className='container'>
        <p className="lead">
          <a className="btn btn-lg" href="#" role="button"  ><h4>Subscribe to our newletter</h4>
            <input type="text" class="form-control" placeholder="Your email" aria-label="email-news" aria-describedby="basic-addon1" value={this.state.email} onChange={this.onNewsletterChange.bind(this)} onClick={this.onBtnClick.bind(this)} />
            <button type='submit' className='btn-primary' id='subscribe' >Subscribe</button>
          </a>
        </p>
      </div>
</form>
);
}

onNewsletterChange(e) { 
  this.setState({ email: e.target.value})
}

onBtnClick(e) { 
  e.preventDefault()
}

handleclick(e) { 
  e.preventDefault()
}

}

export default Newsletter;
