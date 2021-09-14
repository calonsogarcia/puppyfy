const router = require("express").Router();
const PuppyModel = require('../models/Puppy.model');
const AdoptionModel = require('../models/Adoption.model');

router.get("/", (req, res, next) => {
    res.render("adopt/list.hbs");
});

router.get("/dogs", (req, res, next) => {
    res.render("adopt/dogList.hbs");
});

router.get("/cats", (req, res, next) => {
    res.render("adopt/catList.hbs");
});

router.get("/other-puppies", (req, res, next) => {
    res.render("adopt/othersList.hbs");
});


router.get("/adoption-form", (req, res, next) => {
    res.render("adopt/adoption-form.hbs");
})

router.post('/adoption-form', (req, res, next) => {
    const {username, puppyName, puppyType, puppyDateOfBirth, puppySex, puppyBreed, puppyColour, puppyFamilyOptions, comments} = req.body
    AdoptionModel.create({username, puppyName, puppyType, puppyDateOfBirth, puppySex, puppyBreed, puppyColour, puppyFamilyOptions, comments})
    .then((form) => {
        res.redirect('/adopt/adoption-form/print')
    })
    .catch((err) => {next(err)});
    
})

router.get("/adoption-form/print", (req, res, next) => {
    res.render("adopt/adoption-print.hbs");
})


router.get("/give-in-adoption", (req, res, next) => {
    res.render("adopt/give-form.hbs");
})

router.post("/give-in-adoption", (req, res, next) => {
    const {puppyType, breed, dateOfBirth, sex, colour, familyOptions, image, name} = req.body
    PuppyModel.create({puppyType, breed, dateOfBirth, sex, colour, familyOptions, image, name})
        .then(() => {
            console.log("Puppy created");
            res.redirect("/list");
        })
        .catch((err) => {
            next(err);
        });
});


module.exports = router;