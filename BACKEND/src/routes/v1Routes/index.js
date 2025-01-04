import express from 'express'
import authRouter from './authRoute.js';
import adminRouter from './admin/adminRoute.js';
import commonRouter from './common/commonRoutes.js';
import productRouter from './productRoute.js';


const v1Router = express.Router();

v1Router.use("/user", authRouter)
v1Router.use("/admin",adminRouter );
v1Router.use("/common",commonRouter);
v1Router.use("/product",productRouter);

export default v1Router;