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
  to: 'asdmo@ukr.net',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//    3306
