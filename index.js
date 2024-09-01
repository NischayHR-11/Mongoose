const mongoose =require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected!'));

// Schema Of Collections.

const userschema= new mongoose.Schema({

    name :{
        type:String,
        return:true,
        maxLength:30,
    },
    author:{
        type : String,
        enum :["NISCHAY","Mahadev","Vaibhav"],
    },
    cost :{
        type:Number,
        min:[1,"MINIMUM COST SHOULD BE 1 !!"],
    },
});

// Operation buffer (NO NEED TO WRITE ALL THIS STATEMENTS IN THEN BLOCK ,BECAUSE IT ALSO TO CREATE MODELS & SCHEMA BEFORE CONNECTION TO DB).

// creation of collection.

const User=new mongoose.model("User",userschema);

// Insertion (single).

const user1=new User({

    name :"LIFE OF SE",
    author:"NISCHAY",
    cost :299,

});

user1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

// Insertion Many.


User.insertMany([
{
    name :"LIFE OF CE",
    author:"Mahadev",
    cost :199,
},
{
    name :"LIFE OF IS",
    author:"Vaibhav",
    cost :249,
}
]
).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

// Find

User.find({}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


User.find({author:"NISCHAY"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.find({cost:{$eq:299}}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.findOne({_id :"66d4bba4aa7bb009bb016ffd"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.findById("66d4bba4aa7bb009bb016ffd").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// Update (filter,update);

User.updateOne({author:"Vaibhav"},{cost:249}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.updateMany({cost:199},{cost:200}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.findOneAndUpdate({cost:200},{cost:199},{new :true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// DELETE

User.deleteOne({author:"NISCHAY"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

User.deleteMany({author:"NISCHAY"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

User.findOneAndDelete({author:"NISCHAY"},{new :true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

User.deleteMany({}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

