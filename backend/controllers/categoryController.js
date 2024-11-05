const mongoose = require('mongoose');
const Category = require('../models/categoryModel')

const getCategories = async (req,res)=>{
    const category = await Category.find({})
    res.status(200).json(category)

}

const getCategory = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({msg:'no such id'})
    }
    const category = await Category.findById(id)
    if(!category){
        res.status(400).json({error:"no such category"})
    }
    res.status(200).json(category)
}

const createCategory = async (req, res) => {
    const {name,description} = req.body
    try {
        const category = await Category.create({name,description})
        res.status(200).json(category)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}


const deleteCategory= async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
        res.status(404).json({msg:"no such id"})
    const category = await Category.findOneAndDelete({id:id})
    if(!category)
        res.status(404).json({error:"no such category"})
    res.status(200).json(category)
}


const updateCategory = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
        res.status(404).json({msg:"no such id"})
    const category = await Category.findOneAndUpdate({_id:id})
    if(!category){
        res.status(404).json({error:"no such category"})

    }
    res.status(200).json(category)
}

module.exports =
{
    getCategories,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
}