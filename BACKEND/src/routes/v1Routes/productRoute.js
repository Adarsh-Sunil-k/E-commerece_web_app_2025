import express from 'express'
import { requireSignIn } from '../../middlewares/authMiddleware.js';
import { isAdmin } from '../../middlewares/adminMiddleware.js';
import productController from '../../controllers/productController.js';
import upload from '../../middlewares/uploadMiddleware.js';

const productRouter = express.Router();

productRouter.post("/create",requireSignIn,isAdmin,upload.single('image'),productController.createProduct);
productRouter.get("/getProducts",productController.getProducts);

export default productRouter;