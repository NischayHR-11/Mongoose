const mongoose = require("mongoose");


async function main() {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/usersprac");
}

main().then(console.log("Conntected successfully..")).catch((err)=>{

    console.log(err);
});

const userschema = new mongoose.Schema({

    name:String,
    email:String,
    address:[
        {
            _id:false,
            location:String,
            city:String
        }
    ]
});


const user = mongoose.model("user",userschema);

async function add() {
    
    const users= await user.create({name:"Nischay",email:"n@gmail.com",address:[{location:"toy area",city:"chanptana"}]});
    users.address.push({location:"vivekanada nagar",city:"Ramanagara"});
    await users.save();
}

add();