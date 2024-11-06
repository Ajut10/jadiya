const mongoose = require("mongoose");
const User = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/authhelper");
const JWT = require("jsonwebtoken")

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "no such id" });
  }
  const user = await User.findById(id);
  if (!user) {
    res.status(400).json({ error: "no such user" });
  }
  res.status(200).json(user);
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // validation
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Pasword is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }

    // check user
    const existingUser = await User.findOne({ email });
    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        messsage: "User already exists",
      });
    }

    //register user

    const hashedPassword = await hashPassword(password);

    const user = await new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();
    res.status(201).send({
      success: true,
      messsage: "User Registered successfully",
      user
    });
  } catch (error) {
    res.status(404).send({ 
      success:false,
      message: "error in registration",
      error });
  }
};

const loginUser = async(req,res)=>{
  try{
    const {email,password} = req.body
    if(!email||!password){
      return res.status(404).send(
        {
          sucess:false,
          message:"Invalid email or password"
        }
      )
    }
    // check user
    const user = await User.findOne({email})
    if(!user){
      return res.status(404).send({
        success:false,
        message:"Email not registered"
      })
    }
    const match = await comparePassword(password,user.password)
    if(!match){
      return res.status(404).send({
        sucess:false,
        message:"Password not matched"
      })
    }
    // token
    const token = await JWT.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:"7d"})
    res.status(200).send({
      sucess:true,
      message:"login successful",
      user: {
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address
      },
      token
    })
  }catch(error){
    console.log(error)
    res.status(500).send({ 
      success : false,
      messsage: "error in login",
      error });
    }
}

const testUser = (req,res)=>{
  res.send({msg:"protected test"})
}
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ msg: "no such id" });
  }
  const user = await User.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!user) {
    res.status(404).json({ msg: "no such user" });
  }
  res.status(200).json(user);
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ msg: "no such id" });
  }
  const user = await User.findOneAndDelete({ _id: id });
  if (!user) {
    res.status(404).json({ error: "no such user" });
  }
  res.status(200).json(user);
};
module.exports = {
  getUsers,
  getUser,
  registerUser,
  loginUser,
  testUser,
  updateUser,
  deleteUser,
};
