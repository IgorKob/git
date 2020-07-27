var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kobrynovych@gmail.com',
    pass: 'asdkimklomisaq'
  }
});

var mailOptions = {
  from: 'kobrynovych@gmail.com',
  to: 'moji_rozvagu@ukr.net',
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
