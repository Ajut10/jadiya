const mongoose = require("mongoose");
const Product = require("../models/productModel");


// get all product
const getProducts = async (req, res) => {
  const productList = await Product.find({});
  res.status(200).json(productList);
};

//get a product
const getProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "no such id" });
  }
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ error: "no such product" });
  }
  res.status(200).json(product);
};


//create a new product
const createProduct= async (req, res) => {
    const {name, image, countInStock} = req.body
    try{
        const product = await Product.create({name, image, countInStock})
        res.status(200).json(product)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

//update a product
const updateProduct = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({msg: " No such id"})

    }
    const product = await Product.findOneAndUpdate({_id:id}, {...req.body})
    if(!product)
        return res.status(404).json({error: " no such product"})
    res.status(200).json(product)
}

const deleteProduct = async (req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"no such id "})
    }
    const product = await Product.findOneAndDelete({_id:id})
    if(!product) {
        return res.status(404).json({msg:"no such product"})
    }
    res.status(200).json(product)
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
