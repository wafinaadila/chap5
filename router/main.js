const express = require("express");
const router = express();

router.use(express.Router());
router.use(express.json());


router.get("/", (req, res, next) => {
  const name = req.query.name;
  res.render("index", { title: "Main Page", name: name });
});

router.post("/", (req, res, next) => {
  const user = req.query;
  console.log(user);
  
  res.render("index", { title: "Main Page", name: user.name });
});

module.exports = router;