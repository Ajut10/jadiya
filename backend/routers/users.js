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

// protected routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// Admin routes
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Register
router.post("/register", registerUser);

//login
router.post("/login", loginUser);

router.get("/test", requireSignIn, isAdmin, testUser);



module.exports = router;
