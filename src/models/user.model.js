const mongoose = require("mongoose");
const  userSchema= new mongoose.Schema({
    first_name:{
        type: String,
        trim:true,
    },
    last_name:{
        type: String,
        trim:true,
    },
    user_add:{
        type: String,
        trim:true,
    },
    user_req:{
        type: String,
        trim:true,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    },
    {
        timestamps: true,
        versionKey: false,
    }
    );
    const user= mongoose.model("user", userSchema);
    module.exports = user;