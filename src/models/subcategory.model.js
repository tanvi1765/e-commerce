const mongoose = require("mongoose");
const  subcategorySchema= new mongoose.Schema({
    subcategory_name:{
        type: String,
        trim:true,
    },
    other_type:{
        type:String,
        trim:true
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
    const subcategory= mongoose.model("subcategory", subcategorySchema)
    module.exports = subcategory