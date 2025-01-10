const express = require('express');
const app = express();
const path = require('path');
app.set("view engine","ejs");
app.set(path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.listen(3000,(req,res)=>{
    console.log("listeing");
})
app.get('/ig/:username',(req,res)=>{
    let { username } = req.params; 
    const data = require('./data.json')
    const userdata = data[username];
    if(userdata!=undefined){
    res.render("template",{ data:userdata });
    }
    else{
        res.render("no")
    }
})