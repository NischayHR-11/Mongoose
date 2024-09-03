const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");
const Chat= require("./models/chats.js");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

main().then((res)=>{
    console.log("connected...");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


app.listen(port,(req,res)=>{

    console.log("Listening TO Port 8080...");
});

app.get("/",(req,res)=>{

    res.send("WHATSAPP DATA BASE CREATED.. ");
});

app.get("/chats",async(req,res)=>{


    let chats=await Chat.find();
    console.log(chats);

    res.render("chats.ejs",{chats});
});