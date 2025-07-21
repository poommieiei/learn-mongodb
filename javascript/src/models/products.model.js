const { getDB } = require("../config/dbConnect");
const { ObjectId } = require("mongodb");

module.exports = class ProductsModel {

    async getAllProducts() {
        try {
            const db = getDB();
            const productsCollection = db.collection("products");
            const products = await productsCollection.find({}).toArray();
            return products;
        } catch (error) {
            console.error("Error fetching all products:", error);
            throw error;
        }
    }

    async getProductById(id) {
        try {
            const db = getDB();
            const productsCollection = db.collection("products");
            const product = await productsCollection.findOne({ _id: new ObjectId(id) });
            return product;
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            throw error;
        }
    }

    async createProduct(productData) {
        try {
            const db = getDB();
            const productsCollection = db.collection("products");
            const result = await productsCollection.insertOne(productData);
            // console.log(result.acknowledged);
            
            return result.acknowledged;
        } catch (error) {
            console.error("Error creating product:", error);
            throw error;
        }
    }

    async updateProduct(id, productData) {
        try {
            const db = getDB();
            const productsCollection = db.collection("products");
            const result = await productsCollection.updateOne(
                { _id: new ObjectId(id) },
                { $set: productData }
            );
            console.log(result);
            
            return result.modifiedCount > 0;
        } catch (error) {
            console.error("Error updating product:", error);
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            const db = getDB();
            const productsCollection = db.collection("products");
            const result = await productsCollection.deleteOne({ _id: new ObjectId(id) });
            console.log("Delete result:", result);
            
            return result.deletedCount > 0;
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error;
        }
    }
}