/*
Awsesome backend of a registration form.
Why awesome?
- source address is server side
- source password is server side (duh...)
- destinatary address is server side
- node.js
*/

var express=require('express');
var nodemailer = require("nodemailer");
var path = require("path");
var app=express();

/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: "emailAddress@gmail.com",
		pass: "yourPassword"
	}
});
/*------------------SMTP Over-----------------------------*/


/*------------------Routing Started ------------------------*/

app.use(express.static(path.join(__dirname, 'public')));

app.get('/send',function(req,res){
	var mailOptions={
		to : "whereYouWantToSendEmailsAddress@live.com",
		subject : req.query.subject,
	}
	smtpTransport.sendMail(mailOptions);
});
/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
console.log("Express Started on Port 3000");
});