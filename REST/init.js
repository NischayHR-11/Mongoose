const mongoose=require("mongoose");

main().then((res)=>{
    console.log("connected...");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


const chatschema=mongoose.Schema({

    from:{

        type:String,
        return:true,
    },
    to:{

        type:String,
        return:true,
    },
    msg:{

        type:String,
    },
    // createdAt:{

    //     type:Date,
    //     return:true,
    // },

});


const Chat = mongoose.model("Chat",chatschema);

exports.model=Chat;