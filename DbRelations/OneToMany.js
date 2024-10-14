const mongoose = require("mongoose");

main().then((res)=>{

    console.log("Database Connected Successfully..");

}).catch((err)=>{

    console.log("err");
});

async function main(){

    await mongoose.connect("mongodb://127.0.0.1:27017/usersprac")
}

const orderschema=new mongoose.Schema({

    item :String,
    price:Number
});

const order= mongoose.model("order",orderschema);

const userschema=new mongoose.Schema({

    name:String,
    email:String,
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,                   // stores only refernce ID.
            ref:"order"
            
        }
    ]
});

const zomatouser= mongoose.model("zomatouser",userschema);


// One To Many (child refernce inside parent). {terms of thousands}


async function add(){

    const ord=await order.create([{item:"chips",price:"100"},{item:"chocolate",price:"200"},{item:"icecream",price:"300"}]);

    console.log(ord);
}

add();


async function add1(){

    const order1= await order.findOne({item:"chocolate"});
    const order2= await order.findOne({item:"chips"});

    const user=await zomatouser.create({name:"nischay",email:"n@gmail.com",orders:[order1,order2]});

    console.log(user);
}

add1();

async function find() {
    
    const res = await zomatouser.find({}).populate("orders");     // populate provide not only reference ,instead returns Complete object(inf) of each order.
    console.log(res[0]);
}

find();

// One To Many (parent refernce inside child).    {terms of lakhs}