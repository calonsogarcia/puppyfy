const router = require("express").Router();
const ServiceModel = require('../models/Service.model')

router.get("/", (req, res, next) => {
    res.render("services/list.hbs");
});

router.get("/hairdressers", (req, res, next) => {
    res.render("services/hairdressers.hbs");
});

router.get("/puppy-sitters", (req, res, next) => {
    res.render("services/puppy-sitters.hbs");
});

router.get("/puppy-trainers", (req, res, next) => {
    res.render("services/puppy-trainers.hbs");
});



router.get("/partners-form", (req, res, next) => {
    res.render("services/partners-form.hbs");
})

router.post("/partners-form", (req, res, next) => {
    const { name, adress, contact } = req.body
    ServiceModel.create({ name, adress, contact })
        .then((service) => res.redirect("/", service))
        .catch((err) => console.log(err));

})

module.exports = router;