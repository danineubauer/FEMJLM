//server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const app = express() 

require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form', (req, res) => { 
  console.log("api/form", req.body)

  nodemailer.createTestAccount((err, account) => { 
    const htmlEmail = `
    <h3>Contact Details:</h3>
    <ul>
      <li>First Name: ${req.body.name}</li>
      <li>Last Name: ${req.body.lastname}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
      }
    })

    let mailOptions = { 
      from: 'femjerusalem@gmail.com',
      to: 'femjerusalem@gmail.com', 
      replyTo: 'test@testaccount.com',
      subject: 'New Message', 
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => { 
      if(err) { 
        return console.log(err)
      }

      console.log('sent to: ', info.message)
      console.log('message url: ', nodemailer.getTestMessageUrl(info))
    })
})
})



const PORT = process.env.PORT || 3001

app.listen(PORT, () => { 
  console.log(`server listening on port ${PORT}`)
})