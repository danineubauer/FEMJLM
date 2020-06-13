//server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const path = require('path')
const app = express() 

require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// app.use(express.static(path.join(__dirname, 'build')))

// app.get('/ping', (req, res) => {
//   return res.send('pong')
// })

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })


app.post('/api/form', (req, res) => { 
  console.log("api/form", req.body)

  nodemailer.createTestAccount((err, account) => { 
    const htmlEmail = `
    <h3>Contact Details:</h3>
    <ul>
      <li>First Name: ${req.body.name}</li>
      <li>Last Name: ${req.body.lastname}</li>
      <li>Email Address: ${req.body.email}</li>
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
      // to: 'ado.moshe@gmail.com', 
      to: 'danineubauerr@gmail.com', 
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