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

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/send',function(req,res){
	var mailOptions={
        to : "whereYouWantToSendEmailsAddress@live.com",
		subject : req.query.subject,
		//text : req.query.text
	}
	smtpTransport.sendMail(mailOptions);
});

/*--------------------Routing Over----------------------------*/

app.listen(port, function(){
    console.log("Express Started on Port 8080");
});