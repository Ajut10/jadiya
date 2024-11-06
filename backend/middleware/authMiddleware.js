const JWT = require("jsonwebtoken");
const User = require("../models/userModel");

// protected route token base
const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
    );
    req.user = decode
    next();
  } catch (error) {
    console.log(error);
  }
};
//admin access token
const isAdmin =async (req, res, next) => {
    try{
        const user = await User.findById(req.user._id)
        if(user.role !==1){
            return res.status(401).send({
                sucess: false,
                message: "You are not allowed to access this page"
            })
        }
        else{
            next()
        }
    }catch(error) {
        console.log(error);
        res.status(401).send({
            sucess: false,
            message:"error in isAdmin",
            error
        })
    }
}

module.exports ={
    requireSignIn,
    isAdmin
}
