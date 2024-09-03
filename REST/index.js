const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");
const Chat= require("./models/chats.js");
const method=require("method-override");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(method('_method'));

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

    res.render("chats.ejs",{chats});
});

app.get("/chats/:id/edit",(req,res)=>{

    let {id}=req.params;

    res.render("edit.ejs",{id});
})

app.patch("/chats/:id",async(req,res)=>{

    let{id}=req.params;
    let {msg}=req.body;
    await Chat.findByIdAndUpdate(id,{msg:msg});
    res.redirect("/chats")
});

app.get("/chats/new",(req,res)=>{

    res.render("new.ejs");
});

app.post("/chats",async(req,res)=>{

    let {from,to,msg}=req.body;
    let createdAt=new Date;
    await Chat.insertMany([{from,to,msg,createdAt}]); // instances sent should always match with instances of DataBase.
    res.redirect("/chats");
});

app.delete("/chats/:id",async(req,res)=>{

    let {id}=req.params;

    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})