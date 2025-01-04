import jwt from 'jsonwebtoken'
import serverConfig from '../config/serverConfig.js'

//protected routes token base

export const requireSignIn = async (req,res,next)=>{
    try {
        const decode = jwt.verify(
            req.headers.authorization,
            serverConfig.jwt_secret
        );
        req.user = decode
        next()
    } catch (error) {
        console.log(error.message);
        res.status(401).send({
            success:false,
            error,
            message:"error in Admin middleware"
        })
    }
}