const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  const name = req.query.name || "Game";
  console.log(name);
  res.render("game", {
    title: "Game",
    name: name,
  });
});

module.exports = router;