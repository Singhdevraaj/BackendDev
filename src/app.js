const express = require("express");
const app = express();

app.get('/',(_req,res)=>{
    res.end("Jai Shri krishna");
})

app.get("/user",(_req,res)=>{
    res.send({
        "username":"Singhdevraaj",
        "email":"theraaj14@gmail.com"
    })
})

app.post("/user",(_req,res)=>{
    console.log("Data successfully saved to database");
    res.send({
        "response":"user data has been successfully saved to database"
    })
})

app.patch("/user",(_req,res)=>{
    console.log("Data successfully Updated to database");
    res.send({
        "response":"user data has been successfully Updated using PATCH to database"
    })
})

app.delete("/user",(_req,res)=>{
    console.log("Data successfully DELETED to database");
    res.send({
        "response":"user data has been successfully DELETED using DELETE to database"
    })
})

app.all("/hello",(_req,res)=>{
    res.send({"message":"this an app.all() special route which world for all routing method"})
})


app.listen(7777,()=>{
    console.log("Jai jagannath ji")
    console.log("http://localhost:7777");
})