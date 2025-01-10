const express = require("express");
const app  = express();
app.listen(8080,()=>{
    console.log("listening");
})
// app.use((req,res)=>{
//     console.log("hello");
//     res.send("<h1>Hello</h1>");
// })
app.get('/hi',(req,res)=>{
    res.send("<h1>Hi</h1>");
})
app.get("/:username/:id",(req,res)=>{
    let {username} = req.params;
    res.send(`Hello i am ${username}`);
})
app.get('/hillo',(req,res)=>{
    console.log(req.query);
    res.send("no results");
})