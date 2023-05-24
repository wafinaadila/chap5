const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  const name = req.query.name || "Login";
  console.log(name);
  res.render("login", {
    title: "Game",
    name: name,
  });
});

module.exports = router;