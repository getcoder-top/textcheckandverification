var express = require("express");
var path = require("path");
var app = express();

app.set("view engine", "ejs")

app.get("/",(request,response) =>{

    response.render("html");

})

let otp = '';

app.get("/newcode",(request, response) =>{
    // var phone = request.body.phone;

    var y = '1234567890';
    for(var i=0;i<6;i++){
        otp += y[Math.floor(Math.random() * 10)];
    }

    console.log(otp);

    response.render('newpage',{data: otp});
})

app.get("/checkotp",(request,response) =>{
    var checkotp = request.query.otp;

    console.log(checkotp);

    if(checkotp == otp){

        response.render("checkpage");
        otp = '';
    }
    else{
        // alert("Enter Correct OTP");
        response("Enter Correct OTP");
    }
})

app.listen("3000",console.log("Server Running on 3000"))

