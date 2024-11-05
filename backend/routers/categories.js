const express = require("express");
const {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", createCategory);
router.delete("/", deleteCategory);
router.patch("/", updateCategory);
module.exports = router;
