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
		user: "dan.crisan.mtl@gmail.com",
		pass: "imtrlpfodrnrxiqf"
	}
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

// app.get('/',function(req,res){
// 	res.sendfile('index.html');
// });
app.use(express.static(path.join(__dirname, 'public')));

app.get('/send',function(req,res){
	//console.log(req.query.to);
	var mailOptions={
		//to : req.query.to,
		to : "dan.crisan@live.com",
		subject : req.query.subject,
		//text : req.query.text
	}
	//console.log(mailOptions);
	smtpTransport.sendMail(mailOptions);
});

/*--------------------Routing Over----------------------------*/

app.listen(5000,function(){
console.log("Express Started on Port 5000");
});