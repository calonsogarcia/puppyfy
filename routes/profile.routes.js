const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.render("profile/profile.hbs");
});

router.get("/edition", (req, res, next) => {
    res.render("profile/profile-edition.hbs");
});


module.exports = router;
