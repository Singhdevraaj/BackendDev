const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    console.log("hello from app1.js")
    res.send({"message":"Hello ji"})
})
//        /^\/ab?c$/
//        /a/
app.get(/.*fly$/,(req,res)=>{
    console.log("hello from app1.js")
    res.send({"message":"Hello ji from Regex route"})
})
// to get the req.query fron the url
app.get("/superhero",(req,res)=>{
    const para = req.query;
    res.send({
        "userId":para.userId
    })
})
// dynamic routing params
app.get("/super/:userId/:password",(req,res)=>{
    const para = req.params;
    res.send({
        "userId":para.userId,
        "password":para.password

    })
})

app.listen(7777,()=>{
    console.log("Jai jagannath ji")
    console.log("http://localhost:7777");
})