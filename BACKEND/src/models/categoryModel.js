import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    slug:{
        type:String,
        lowercase:true,
    }
});

export default mongoose.model('Category', CategorySchema);
// export default mongoose.model('User',userSchema);