const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const Chat= require("./models/chats.js");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.listen(port,(req,res)=>{

    console.log("Listening TO Port 8080...");
});

app.get("/",(req,res)=>{

    res.send("WHATSAPP DATA BASE CREATED.. ");
});