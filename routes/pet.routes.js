const router = require("express").Router();
const Pet = require("../models/Pet.model");
const User = require("../models/user.model");


router.get("/", (req, res, next) => {
    res.render("adopt/list.hbs");
});
router.get("/dogs", (req, res, next) => {
    res.render("adopt/doglist.hbs");
});
router.get("/cats", (req, res, next) => {
    res.render("adopt/catlist.hbs");
});
router.get("/otherpets", (req, res, next) => {
    res.render("adopt/otherslist.hbs");
});
router.get("/adoption-form", (req, res, next) => {
    res.render("adopt/adoption-form.hbs");
})
router.get("/create", (req, res, next) => {
    User.find()
        .then((users) => res.render("adopt/give-form.hbs", { users }))
        .catch((err) => console.log(err));
})
router.post("/create", (req, res, next) => {
    console.log(req.body)
    const {
        petType,
        breed,
        dateOfBirth,
        sex,
        colour,
        familyOptions,
        image,
        name
    } = req.body
    Pet.create({
            petType,
            breed,
            dateOfBirth,
            sex,
            colour,
            familyOptions,
            image,
            name
        })
        .then((pet) => {
            console.log("pet created", pet);
            res.redirect("/adopt");
        })
        .catch((err) => {
            next(err);
        });
});


module.exports = router;