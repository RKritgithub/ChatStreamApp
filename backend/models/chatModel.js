const mongoose = require('mongoose')
//this is our chatModel going to look like
const chatModel = mongoose.Schema(
    {
        chatName: {type:String, trim:true},
        isGroupChat : {type: Boolean, default: false},
        users: [
            {
                type: mongoose.Schema.Types.ObjectId ,//this will create the ID to that particular object
            ref: "User",
            },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    },
);

const Chat = mongoose.model("Chat" , chatModel );


module.exports = Chat;




//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin