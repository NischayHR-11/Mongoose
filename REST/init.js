const mongoose=require("mongoose");
const Chat= require("./models/chats.js");

main().then((res)=>{
    console.log("connected...");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany([
    {
        from:"Nishay",
        to:"Mahadev",
        msg:"HELLO MAHADEV !!"
    },
    {
        from:"Nishay",
        to:"Vaibhav",
        msg:"HELLO VAIBHAV !!"
    },
    {
        from:"Vaibhav",
        to:"Mahadev",
        msg:"HELLO MAHADEV !!"
    },
    {
        from:"Mahadev",
        to:"Vaibhav",
        msg:"HELLO VAIBHAV !!"
    }
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.lof(err);
});
