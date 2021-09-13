const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.render("veterinary/veterinary.hbs");
})
module.exports = router;