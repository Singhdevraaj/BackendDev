const express = require("express");
const app = express();

app.use('/test',function(req,res){
    res.send(" Hello from test route :)");
})


app.use('/hello',function(req,res){
    res.send("Hello Hello Hello :)")
})

app.use('/',(req,res)=>{
    res.end("Jai Shri krishna");
})

app.listen(7777,()=>{
    console.log("Jai jagannath ji")
    console.log("http://localhost:7777");
})