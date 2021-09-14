const router = require("express").Router();
const VeterinaryModel = require('../models/Veterinary.model')

router.get("/", (req, res, next) => {
    res.render("veterinary/veterinary.hbs");
})

module.exports = router;