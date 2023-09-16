const mongoose = require("mongoose");
const  productSchema= new mongoose.Schema({
    product_name:{
        type: String,
        trim:true,
    },
    product_category:{
        type: String,
        trim:true
    },
    product_des:{
        type: String,
        trim:true
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref:"category",
    },
    availability:{
        type:String,
        trim:true
    },
    product_dis:{
        type:Number,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    },
    // {
    //     timestamps: true,
    //     versionKey: false,
    //     toJSON:{
    //         transform:function(doc,data){
    //             if(data)
    //         }
    //     }
    // }
    );
    const product= mongoose.model("product", productSchema);
    module.exports = product;