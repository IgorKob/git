var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'asd@gmail.com',
    pass: '123456789'
  }
});

var mailOptions = {
  from: 'asd@gmail.com',
  to: 'asdu@ukr.net',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
  //html: '<h1>Welcome</h1><p>That was easy!</p>'   щоб надіслати як html сторінку
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
