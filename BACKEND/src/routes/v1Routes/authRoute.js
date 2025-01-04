import express from 'express'
import authController from '../../controllers/authController.js'
import { requireSignIn } from '../../middlewares/authMiddleware.js'
import { isAdmin } from '../../middlewares/adminMiddleware.js'

const authRouter = express.Router()
// Register user || Post
authRouter.post('/register',authController.register)
// Login USer || Post
authRouter.post('/login',authController.login)
//ping || get
authRouter.get('/ping', requireSignIn, isAdmin, authController.ping)

//protected.route auth 

authRouter.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});
//forgot password
authRouter.post('/forgot-password',authController.forgotPassword)

//Admin Verification
authRouter.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});


export default authRouter