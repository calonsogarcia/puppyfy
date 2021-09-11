const router = require("express").Router();

router.get("/puppycare", (req, res, next) => {
    res.render("services/list.hbs");
});


module.exports = router;