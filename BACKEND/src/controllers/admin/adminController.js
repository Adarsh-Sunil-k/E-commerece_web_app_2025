import Category from "../../models/categoryModel.js";
import slugify from 'slugify'
const ping = (req,res)=>{
    res.send({
        success:true,
        message:"routed successfully"
    });
}

// Category
    //create

const createCategory = async(req,res)=>{
    try {
            const {name} = req.body
            if(!name){
                return res.status(401).send({message:'Name is Required'})
            }
            const existingCategory = await Category.findOne({name})
            if(existingCategory){
                return res.status(200).send({
                    success:true,
                    message:'Category Already Existing'
                })
            }
            const category = await new Category({name,slug:slugify(name)}).save();
            res.status(201).send({
                success:true,
                message:"New Category Created",
                category,
            })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in Category"
        })
        
    }
}

    // update
const updateCategory = async(req,res)=>{
    try {
        const {name} = req.body;
        const {id} = req.params
        const category = await Category.findByIdAndUpdate(
            id,
            {name,slug:slugify(name)},
            {new:true}
        );
        res.status(200).send({
            success:true,
            message:"Category Updated Successfully",
            category
        })
    } catch (error) {
       console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error While Updating Category"
        })
    }
}

    //delete
const deleteCategory = async (req,res)=>{
    try {
        const {id} = req.params
        const category = await Category.findOneAndDelete(id);
        res.status(200).send({
            success:true,
            message:"Delete Category Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error While Deleting"
        })
        
    }
}

const adminController = {
    ping,
    createCategory,
    updateCategory,
    deleteCategory,
}

export default adminController;