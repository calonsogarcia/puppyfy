const router = require("express").Router();
const ServicesModel = require('../models/Services.model')

router.get("/", (req, res, next) => {
    res.render("services/list.hbs");
});
router.get("/partners-form", (req, res, next) => {
    res.render("services/partners-form.hbs");
})
router.post("/partners-form", (req, res, next) => {
    const { name, adress, contact } = req.body
    ServicesModel.create({ name, adress, contact })
        .then((service) => res.redirect("/", service))
        .catch((err) => console.log(err));

})

module.exports = router;