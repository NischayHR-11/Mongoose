const mongoose=require("mongoose");


const chatschema= new mongoose.Schema({

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

module.exports=Chat;