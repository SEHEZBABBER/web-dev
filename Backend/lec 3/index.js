const express = require("express");
const app = express();
const path = require("path");
app.set("view engine","ejs"); // if we run the file from another folder it will show a error taht failed to look up for views folder as it is searching for a views folder in the directory from where it was running for fixinf this we will be using a middleware 
app.set("views",path.join(__dirname,"/views"));
app.listen(8080,(req,res)=>{
    console.log(`listening`);
})
app.get('/home',(req,res)=>{
    res.render("home");
})
app.get('/rolldice',(req,res)=>{
    let diceval = Math.floor(Math.random()*6+1);
    res.render("rolldice",{diceval});
})