const router = require("express").Router();

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
    res.render("adopt/give-form.hbs");
})
router.post("/create", (req, res, next) => {
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
            res.redirect("/adopt/give-form");
        })
        .catch((err) => {
            next(err);
        });
});


module.exports = router;