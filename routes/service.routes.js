const router = require("express").Router();
const ServiceModel = require('../models/Service.model')

router.get("/", (req, res, next) => {
    res.render("services/list.hbs");
});

router.get("/hairdressers", (req, res, next) => {
    ServiceModel.find({ serviceType: "Hairdresser" })
        .then((allHairdressers) => {
            res.render("services/hairdressers.hbs", { allHairdressers })
        })
        .catch((err) => { next(err) });
});


router.get("/puppy-sitters", (req, res, next) => {
    ServiceModel.find({ serviceType: "Puppysitter" })
        .then((allPuppysitters) => {
            res.render("services/puppy-sitters.hbs", { allPuppysitters })
        })
        .catch((err) => { next(err) });
});

router.get("/puppy-trainers", (req, res, next) => {
    ServiceModel.find({ serviceType: "PuppyTrainer" })
        .then((allPuppyTrainers) => {
            res.render("services/puppy-trainers.hbs", { allPuppyTrainers })
        })
        .catch((err) => { next(err) });
});

router.get("/veterinaries", (req, res, next) => {
    ServiceModel.find({ serviceType: "Veterinary" })
        .then((allVeterinaries) => {
            res.render("services/veterinary.hbs", { allVeterinaries })
        })
        .catch((err) => { next(err) });
});



router.get("/create", (req, res, next) => {
    res.render("services/partners-form.hbs");
})

router.post("/create", (req, res, next) => {
    const { name, serviceType, address, contact, image } = req.body;
    ServiceModel.create({ name, serviceType, address, contact, image })
        .then((service) => {
            console.log("service created", service);
            res.redirect("/")
        })
        .catch((err) => next(err));

});

module.exports = router;