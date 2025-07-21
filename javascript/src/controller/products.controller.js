const ProductsModel = require("../models/products.model");

module.exports = {
  getProducts: async (req, res) => {
    try {
      const productsModel = new ProductsModel();
      const products = await productsModel.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  },

  getProductById: async (req, res) => {
    try{
        const productId = req.params.id;
        const productsModel = new ProductsModel();
        const product = await productsModel.getProductById(productId);
        
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        res.status(200).json(product);
    }catch (error) {
      console.error("Error fetching product by ID:", error);
      res.status(500).json({ message: "Failed to fetch product" });
    }
  },

  createProduct: async (req, res) => {
    try {
        const productData = req.body;
        const productsModel = new ProductsModel();
        const newProduct = await productsModel.createProduct(productData);
        
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.log("Error creating product:", error);
        res.status(500).json({ message: "Failed to create product" });
        
    }
  },

  updateProduct: async (req, res) => {
    try {
        const productId = req.params.id;
        const productData = req.body;
        
        if (productData.hasOwnProperty('_id')) {
          delete productData._id;
        }
        console.log(productData);
        
        if (!productId || !productData) {
            return res.status(400).json({ message: "Product ID and data are required" });
        }
        
        const productsModel = new ProductsModel();
        const updated = await productsModel.updateProduct(productId, productData);
        
        if (!updated) {
            return res.status(200).json({ message: "No changes were made. Data is the same as before." });
        }

        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Failed to update product" });
    }
  },
  
  deleteProduct: async (req, res) => {
    try {
        const productId = req.params.id;
        const productsModel = new ProductsModel();
        const deleted = await productsModel.deleteProduct(productId);
        
        if (!deleted) {
            return res.status(404).json({ message: "Product not found or not deleted" });
        }
        
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Failed to delete product" });
    }
  }
};
