const express = require("express");

const {isAdmin, requireSignIn} = require("../middleware/authMiddleware")

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductPhotos,

    
}= require('../controllers/productController')

const formidable = require('express-formidable')
const router = express.Router();

router.get(`/get-product`, getProducts);
router.get(`/get-product/:slug`,getProduct)
router.get(`/product-photo/:pid`,getProductPhotos)
router.post(`/create-product`, requireSignIn, isAdmin,formidable(),createProduct);
router.put(`/update-product/:pid`,requireSignIn,isAdmin,formidable(), updateProduct);
router.delete(`/delete-product/pid`, deleteProduct);

module.exports = router;
