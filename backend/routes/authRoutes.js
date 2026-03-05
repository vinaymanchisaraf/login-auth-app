const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    return res.status(200).json({
      success: true,
      message: "Login successful",
      username: username
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password"
  });

});

module.exports = router;