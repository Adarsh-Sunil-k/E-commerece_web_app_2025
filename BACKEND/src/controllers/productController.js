import slugify from 'slugify'
import Product from '../models/productModel.js'
import Category from '../models/categoryModel.js'
import cloudinaryInstance from '../config/cloudinaryConfig.js'

const createProduct = async (req, res) => {
  try {
    if (!req.file) {
      console.log("Uploaded file:", req.file);
      console.log("req.body:", req.body);
      return res.send({ message: "Image is Require Or Image Size is Greater Than 5mb" });
    }

    console.log("Uploaded file:", req.file);

    // Upload the image to Cloudinary
    cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Error uploading to Cloudinary",
        });
      }

      // Extract Cloudinary URL
      const imageUrl = result.url;

      // Destructure the request body
      const { name, description, price, category, quantity, image } = req.body;

      // Validation checks
      switch (true) {
        case !name:
          return res.status(400).send({ error: "Name is required" });
        case !description:
          return res.status(400).send({ error: "Description is required" });
        case !price:
          return res.status(400).send({ error: "Price is required" });
        case !category:
          return res.status(400).send({ error: "Category is required" });
        case !quantity:
          return res.status(400).send({ error: "Quantity is required" });
        // case !image:
        //   return res.status(400).send({ error: "Photo is required" });
        // case image.size > 5 * 1024 * 1024:
        //   return res.status(400).send({ error: "Photo size should be less than 5MB" });
      }

      // Check if category exists
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        return res.status(400).send({ message: "Category does not exist" });
      }

      // Create a new product in the database
      const createProduct = new Product({
        name,
        description,
        price,
        stock: quantity, // Assuming 'quantity' corresponds to the stock
        category,
        slug: slugify(name),
        image: imageUrl,
      });

      // Save the product
      await createProduct.save();

      // Send the success response
      return res.status(201).send({
        success: true,
        message: "Product Created Successfully",
        product: createProduct,
      });
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Error While Creating Product",
      error: error.message,
    });
  }
};

  //get All Products

  const getProducts = async (req,res)=>{
    try {
      const products = await Product
      .find({})
      .select("-photo")
      .limit(12)
      .sort({createdAt:-1});
      res.status(200).send({
        success:true,
        message:"All products",
        products,
        totalCount:products.length,
      })
    } catch (error) {
      res.status(500).send({
        success:false,
        message:"Error in Getting Products",
        error:error.message,
      })
    }
  }

const productController = {
  createProduct,
  getProducts,
};

export default productController;
