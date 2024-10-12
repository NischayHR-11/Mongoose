const mongoose = require("mongoose");


async function main() {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/usersprac");
}

main().then(console.log("Conntected successfully..")).catch((err)=>{

    console.log(err);
});

const userschema = new mongoose.Schema({

    name:String,
    email:String
});

const user = mongoose.model("user",userschema);

async function add() {
    
    await user.create({name:"Nischay",email:"n@gmail.com"});
}

add();