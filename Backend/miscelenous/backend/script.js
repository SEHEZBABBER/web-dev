const express = require('express');
const app = express();
app.listen(8080,(req,res)=>{
    console.log(`Listening`);
})
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.get('/register',(req,res)=>{
    console.log(req.query);
})
app.post('/register',(req,res)=>{
    console.log(req.body);
})