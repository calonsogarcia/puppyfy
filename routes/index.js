const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", (req, res, next) => {
  res.render("home.hbs");
});

router.get("/about-us", (req, res, next) => {
  res.render("about-us.hbs");
});

module.exports = router;
