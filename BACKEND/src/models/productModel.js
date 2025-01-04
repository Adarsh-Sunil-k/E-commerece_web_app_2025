import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    slug:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    category: [
        { type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    require:true, }
        ],
    image: {
        type: String,
   },
    shipping:{
        type:Boolean,
    }
},{timestamps:true})

export default mongoose.model('Products',productSchema);