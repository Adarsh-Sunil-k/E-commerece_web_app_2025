import express from 'express'
import { requireSignIn } from '../../../middlewares/authMiddleware.js';
import { isAdmin } from '../../../middlewares/adminMiddleware.js';
import adminController from '../../../controllers/admin/adminController.js';


const adminRouter = express.Router();
// Category

    // create
adminRouter.post('/create-category', requireSignIn,isAdmin,adminController.createCategory);
    // update
adminRouter.put('/update-category/:id', requireSignIn,isAdmin,adminController.updateCategory);
    // delete
adminRouter.delete('/delete-category/:id', requireSignIn,isAdmin,adminController.deleteCategory);



export default adminRouter ;