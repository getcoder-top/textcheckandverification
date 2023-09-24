var express = require("express")
var path = require("path")
var app = express()
var fs = require("fs")
var bodyparser = require("body-parser")
var fileupload = require("express-fileupload")

app.set("view engine", "ejs")

app.use(fileupload());
app.use(bodyparser.urlencoded({extended: false}))

app.get("/",(request,response) =>{

    response.render('html');
})

app.post("/newfile",(request,response) =>{
    var file = request.files.newfile
    var data = file.data;
    console.log(data.toString('utf8'));

    fs.readFile(file,(data,err) =>{
        if(err){
            console.log(err);
        }
        else{

            response(data.toString('utf8'));
            // console.log(data);
        }
    })
    console.log(file);
})

app.listen('3000',() => console.log("Running on port 3000"))