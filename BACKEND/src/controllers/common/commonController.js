import Category from "../../models/categoryModel.js";
import slugify from 'slugify'

const getCategories = async(req,res)=>{
    try {
        const categories = await Category.find({});
        res.status(200).send({
            success:true,
            message:"All Categories List",
            categories
        })
    } catch (error) {
       console.log(error);
       res.status(500).send({
        success:false,
        error,
        message:"Error While Gating All Category"
       })
        
    }
}

const singleCategory = async(req,res)=>{
    try {
        const category = await Category.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            category,
            message:"Get Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error While Getting Single Category"
        })
        
    }
}


const commonController = {
    getCategories,
    singleCategory,
}

export default commonController ;