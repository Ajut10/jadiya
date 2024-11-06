const express = require("express");
const {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
  testUser,
} = require("../controllers/userController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getUsers);

// router.get("/:id", getUser);

// Register
router.post("/register", registerUser);

//login
router.post("/login", loginUser);

router.get("/test",requireSignIn,isAdmin,testUser)

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
