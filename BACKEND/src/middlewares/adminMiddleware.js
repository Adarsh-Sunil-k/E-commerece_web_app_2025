import User from '../models/userModel.js'

export const isAdmin = async(req,res,next)=>{
    try {
        const user = await User.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"UnAuthorized Access"
            })
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
        
    }
}