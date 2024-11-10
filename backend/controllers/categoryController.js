const mongoose = require("mongoose");
const Category = require("../models/categoryModel");
const slugify = require("slugify");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({ message: "Category already exists" });
    }
    const category = await new Category({ name, slug: slugify(name) }).save();
    res.status(200).send({
      success: true,
      message: "New category created successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "error in category creation",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true },
    );
    res.status(200).send({
      success: true,
      message: "category updated successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while category update",
      error,
    });
  }
};

const getCategorys = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).send({
      success: true,
      message: "Category lists",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting category",
      error,
    });
  }
};
const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "category",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting category",
      error,
    });
  }
};

const deleteCategory = (req, res) => {
    try {
        
        const {id}= req.params
        const category = await Category.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "category deleted",
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            menubar: "error while deleting category",
            error
        })
    }
    }
    module.exports = {
  createCategory,
  updateCategory,
  getCategorys,
  getCategory,
  deleteCategory
};
