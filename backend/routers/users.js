const express = require("express");
const {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

// Register
router.post("/register", registerUser);

//login
router.post("/login", loginUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
