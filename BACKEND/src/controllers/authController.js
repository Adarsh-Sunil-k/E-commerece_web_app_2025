import { comparePassword, hashPassword } from '../helpers/authHelper.js'
import User from '../models/userModel.js'
import serverConfig from '../config/serverConfig.js'
import jwt from 'jsonwebtoken'

const ping = (req,res)=>{
    res.send({
        success:true,
        message:"routed successfully"
    });
}

const register = async (req, res) => {
    try {
        const { name, email, password, phone, address,answer } = req.body
        //validation
        if (!name) {
            return res.send({ message: "Name is required" })
        }
        if (!email) {
            return res.send({ message: "Email is required" })
        }
        if (!password) {
            return res.send({ message: "Password is required" })
        }
        if (!phone) {
            return res.send({ message: "Phone no is required" })
        }
        if (!address) {
            return res.send({ message: "Address is required" })
        }
        if (!answer) {
            return res.send({ message: "Answer is required" })
        }
        // check user
        const existingUser = await User.findOne({ email })
        // existingUser user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register Please Login"
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        // save user
        const user = await new User({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            answer,
        }).save();

        res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })

    }
}

//Login || POST

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        //check user
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email Not Registered"
            })
        }
        const matchPassword = await comparePassword(password, user.password)
        if (!matchPassword) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }
        // token
        const token = await jwt.sign({ _id: user._id }, serverConfig.jwt_secret, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login Successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address:user.address,
                role:user.role,
            },
            token,
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })

    }
}

const forgotPassword = async(req,res)=>{
    try {
        const {email,answer,newPassword}=req.body
        if(!email){
            res.status(400).send({message:"email is required"})
        }
        if(!answer){
            res.status(400).send({message:"question is required"})
        }
        if(!newPassword){
            res.status(400).send({message:"new password  is required"})
        }
        //check
        const user = await User.findOne({email,answer});
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"wrong Email or Answer"
            })
        }
        const hashed = await hashPassword(newPassword);
        await User.findByIdAndUpdate(user._id, {password:hashed});
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"something went wrong",
            error
        })
        
    }
}

const authController = {
    ping,
    register,
    login,
    forgotPassword
}
export default authController
