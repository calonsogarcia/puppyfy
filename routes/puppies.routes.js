const router = require("express").Router();
const PuppyModel = require("../models/Puppy.model");
const AdoptionModel = require("../models/Adoption.model");
const Puppy = require("../models/Puppy.model");

router.get("/", (req, res, next) => {
    res.render("adopt/list.hbs");
});

router.get("/dogs", (req, res, next) => {
    PuppyModel.find({ puppyType: "Dog" })
        .then((allDogs) => {
            res.render("adopt/dogList.hbs", { allDogs });
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/cats", (req, res, next) => {
    PuppyModel.find({ puppyType: "Cat" })
        .then((allCats) => {
            res.render("adopt/catList.hbs", { allCats });
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/other-puppies", (req, res, next) => {
    PuppyModel.find({ puppyType: "Other" })
        .then((allOthers) => {
            res.render("adopt/othersList.hbs", { allOthers });
        })
        .catch((err) => {
            next(err);
        });
});

//CREATE AN ADOPTION FORM
router.get("/:puppyId/adoption-form", (req, res, next) => {
    PuppyModel.findById(req.params.puppyId).then((puppy) => {
        res.render("adopt/adoption-form.hbs", { puppy });
    });
});

// Revisar
router.post("/:puppyId/adoption-form", (req, res, next) => {
    let user_id;
    const puppy_id = req.params.puppyId;
    if (req.session.loggedInUser) {
        user_id = req.session.loggedInUser._id;
    }
    if (!user_id || !puppy_id) {
        res.redirect(`/adopt/${puppy_id}/adoption-form`);
        return;
    }
    AdoptionModel.create({
            user_id: req.session.loggedInUser._id,
            puppy_id: req.params.puppyId,
        })
        .then((newForm) => {
            console.log(newForm);
            res.redirect("/adopt/adoption-form//print");
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/adoption-form/print", (req, res, next) => {
    res.render("adopt/adoption-print.hbs");
});

// EDIT AN ADOPTION FORM

//DELETE AN ADOPTION FORM

// CREATE A PUPPY
router.get("/give-in-adoption", (req, res, next) => {
    res.render("adopt/give-form.hbs");
});

router.post("/give-in-adoption", (req, res, next) => {
    const {
        puppyType,
        name,
        birthDate,
        sex,
        colour,
        breed,
        familyOptions,
        image,
        comments,
    } = req.body;
    PuppyModel.create({
            puppyType,
            name,
            birthDate,
            sex,
            colour,
            breed,
            familyOptions,
            image,
            comments,
        })
        .then((newPuppy) => {
            console.log("Puppy created");
            res.redirect("/adopt/give-in-adoption/print");
        })
        .catch((err) => {
            next(err);
        });
});

//EDIT A PUPPY
router.get("/give-in-adoption/print", (req, res, next) => {
    const { id } = req.params;
    Puppy.findById(id).then((puppy) => {
        res.render("adopt/give-print.hbs", { puppy });
    });
});

router.post("/give-in-adoption/:id/update-form", (req, res, next) => {
    const { id } = req.params;
    const {
        puppyType,
        name,
        birthDate,
        sex,
        colour,
        breed,
        familyOptions,
        image,
        comments,
    } = req.body;
    PuppyModel.findByIdAndUpdate(
            id, {
                puppyType,
                name,
                birthDate,
                sex,
                colour,
                breed,
                familyOptions,
                image,
                comments,
            }, { new: true }
        )
        .then((puppy) => {
            console.log("puppy requested", puppy);
            res.redirect(`/give-in-adoption/${puppy._id}`);

            res.render("/give-in-adoption/give-update-form", { puppy });
        })
        .catch((err) => {
            next(err);
        });
});

//DELETE A PUPPY
router.post("/give-in-adoption/:id/delete", (req, res, next) => {
    const { id } = req.params;
    PuppyModel.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;