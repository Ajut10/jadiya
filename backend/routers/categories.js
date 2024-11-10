const express = require("express");
const { createCategory, updateCategory, getCategory, getCategorys } = require("../controllers/categoryController");

const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create-category", requireSignIn, isAdmin, createCategory);

router.put("/update-category/:id", requireSignIn, isAdmin, updateCategory);

router.get("/get-category/", getCategorys);

router.get("/get-category/:slug",getCategory)

router.delete("/delete-category/:id",requireSignIn, isAdmin, deleteCategory);
module.exports = router;
