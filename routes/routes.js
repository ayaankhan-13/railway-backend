const express = require("express");
const passport = require("../config/passport");
const router = express.Router();
const { checkAuth, checkAdmin, Logout, googleCallback, getProfile } = require("../controllers/usercontroller");

// Google OAuth login
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth callback
router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }), googleCallback);

// Logout
router.get("/logout", Logout);

// Check Auth
router.get("/profile", checkAuth, getProfile);

// Admin only route example
router.get("/admin", checkAuth, checkAdmin, (req, res) => {
  res.send("Welcome Admin!");
});

module.exports = router;